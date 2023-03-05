window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureMax = document.querySelector('.temperature-max');
    let temperatureMin = document.querySelector('.temperature-min');

    let windDeg = document.querySelector('.windDeg');
    let windGust = document.querySelector('.windGust');
    let windSpeed = document.querySelector('.windSpeed');


    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid={APIKEY}`;

             fetch(api)
                .then(response => {
                return response.json();
            })
                .then(data => {
                console.log(data);
                const {temp, humidity, temp_max, temp_min} = data.main;
                const {main, description, icon} = data.weather[0];
                const {deg, gust, speed} = data.wind;
                
                console.log(description)
                //DOM elementer fra api


                temperatureDegree.textContent = temp
                temperatureDescription.textContent = description
                locationTimezone.textContent = data.name
                temperatureMax.textContent = temp_max
                temperatureMin.textContent = temp_min

                windDeg.textContent = deg
                windGust.textContent = gust
                windSpeed.textContent = speed

                document.getElementById('icon').src="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
            });
        });
    }
});



