function loadcoupon(){
    document.getElementById("coupon").style.visibility="visible"
}

function closecoupon(){
    document.getElementById("coupon").style.visibility="hidden"
}

function changeMode(){
    var mybody = document.body
    document.body.classList.toggle("darkmode")
}


function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{x.innerText="GeoLocation is not supported by this browser.";}
}

function showPosition(data){
    console.log(data)
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        let cityName = data.city.name
        let weather = `${data.list[0].temp.day} Celcius`
        let output = `${weather} ${cityName}`
        console.log(data)
        x.innerText=output;
    })
}

function cloud(){
    let cloud = document.getElementById("clouds");
    cloud.innerHTML = "&#xf744;";
}

const validateEmail = () => {
let email = document.getElementById("email").value;
let Eout = document.getElementById("eout");
if(email.trim().length == 0) {
    Eout.innerHTML = "Please Enter Email Address"
}else{
    Eout.value = ""
}
}




