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

var x = document.getElementById("output")
var y = document.getElementById("weatheroutput")
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}

function loadlocation(){
    document.getElementById("location").visibility="visible"
}

function closelocation(){
    document.getElementById("location").visibility="visible"
}


function showPosition(data){
    console.log(data)
    x.innerText = `Latitude is ${data.coords.latitude}, Longitude is ${data.coords.longitude}`
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
        y.innerText= output;
    })
}

