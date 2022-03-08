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

var x = document.getElementById("out").innerHTML=`Latitude ${data.coords.latitude} Longitude ${data.coords.longitude}`
var y = document.getElementById("weatherout").innerHTML= output;

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{x.innerHTML="GeoLocation is not supported by this Browser.";}
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
        let weather = `${data.list[0].temp.day} degree`
        let output = `${cityName} ${weather}`
        console.log(data)
    })
}

function loadlocation(){
    document.getElementById("location").style.visibility="visible"
}

function closelocation(){
    document.getElementById("location").style.visibility="visible"
}

window.onload= loadlocation()

