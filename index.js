"use strict";

const cities = [
    {
        "city": "New York",
        "latitude": 40.7127837,
        "longitude": -74.0059413
    },
    {
        "city": "Los Angeles",
        "latitude": 34.0522342,
        "longitude": -118.2436849
    },
    {
        "city": "Chicago",
        "latitude": 41.8781136,
        "longitude": -87.6297982
    },
    {
        "city": "Houston",
        "latitude": 29.7604267,
        "longitude": -95.3698028
    },
    {
        "city": "Philadelphia",
        "latitude": 39.9525839,
        "longitude": -75.1652215
    },
    {
        "city": "Phoenix",
        "latitude": 33.4483771,
        "longitude": -112.0740373
    },
    {
        "city": "San Antonio",
        "latitude": 29.4241219,
        "longitude": -98.49362819999999
    },
    {
        "city": "San Diego",
        "latitude": 32.715738,
        "longitude": -117.1610838
    },
    {
        "city": "Dallas",
        "latitude": 32.7766642,
        "longitude": -96.79698789999999
    },
    {
        "city": "San Jose",
        "latitude": 37.3382082,
        "longitude": -121.8863286
    },
    {
        "city": "Austin",
        "latitude": 30.267153,
        "longitude": -97.7430608
    },
    {
        "city": "Indianapolis",
        "latitude": 39.768403,
        "longitude": -86.158068
    },
    {
        "city": "Jacksonville",
        "latitude": 30.3321838,
        "longitude": -81.65565099999999
    },
    {
        "city": "San Francisco",
        "latitude": 37.7749295,
        "longitude": -122.4194155
    },
    {
        "city": "Columbus",
        "latitude": 39.9611755,
        "longitude": -82.99879419999999
    },
    {
        "city": "Charlotte",
        "latitude": 35.2270869,
        "longitude": -80.8431267
    },
    {
        "city": "Fort Worth",
        "latitude": 32.7554883,
        "longitude": -97.3307658
    },
    {
        "city": "Detroit",
        "latitude": 42.331427,
        "longitude": -83.0457538
    },
    {
        "city": "El Paso",
        "latitude": 31.7775757,
        "longitude": -106.4424559
    },
    {
        "city": "Memphis",
        "latitude": 35.1495343,
        "longitude": -90.0489801
    }
]

// Close the dropdown if the user clicks outside of it
window.onload = function () {

    // load the dropdown list (see function below)
    populateCity();

}

function populateCity() {
    const selectCity = document.getElementById("selectCity");
    let length = cities.length;
    for (let i = 0; i < length; i++) {
        let theCity = new Option(cities[i].city, i);
        selectCity.appendChild(theCity);

    }
}

function cityChange(index) {
    console.log(JSON.stringify(cities[index]));
    let selectedCity = cities[index];
    let stationLookupUrl = `https://api.weather.gov/points/${selectedCity.latitude},${selectedCity.longitude}`;
    fetch(stationLookupUrl, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': '*',
            'origin': 'http://localhost:3002',
            'Referer': 'http://localhost:3002/'
        }
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(data => {
            console.log(JSON.stringify(data));
            console.log(JSON.stringify(data.properties));
            //let forecastArray = data.properties.periods;
            //displayWeather(forecastArray);
        })
}