
const token = "91d315ae2063a35157f1715be037723b"; // save your token in this variable
const aarhus = "https://api.openweathermap.org/data/2.5/weather?q=Aarhus,DK&appid=" +
    token +
    "&units=metric";

$(document).ready(function () {

    // get the weather data
    fetch(aarhus).then(response => {
        return response.json();
    }).then(data => {

        // Work with JSON data here
        console.log(data); // show what's in the json
        $('#result').append('<div class="weatherInfo">' + data.weather[0].main +
            ' in ' + data.name + '<h4> temperature ' + data.main.temp + ' grader</h4> ' + '<h4>feels like '+ data.main.feels_like + ' grader</h4>' + '<figure><img src="http://openweathermap.org/img/w/' +
            data.weather[0].icon + '.png" alt="The weather : ' +
            data.weather[0].main +
            '"></figure>' +
            '</div>');

        // here are the icons: https://openweathermap.org/weather-conditions 

    }).catch(err => {
        // Do something for an error here
        console.log('There was an error ...');
    });


    //WEATHER API SLUT
console.log("halloween");

    //MAPS START
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0ZWNlY2lsaWUiLCJhIjoiY2tmcWtpY29vMWJwOTJyczUyN2M5eXY5eiJ9.N4nQU-1STrh0K7O_UloCZQ';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/albertececilie/ckfxohrki08xs19nzf9kup9lw', // style URL
        center: [10.206, 56.159], // starting position [lng, lat]
        zoom: 12 // starting zoom
        
      


    });

    //MAPS SLUT

}); // document ready end
