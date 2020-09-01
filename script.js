/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "725e1166e8766a8cd281fef948b51818";

/**
 * Retrieve weather data from openweathermap
 */
getWeatherData = ( city ) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather?";
    const FULL_URL = `${URL}q=${city}&appid=${API_KEY}&units=imperial`
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((response) => {
        return response.json();
    })
}

/**
 * Retrieve city input and get the weather data
 */
searchCity = () => {
    const city = document.getElementById( 'city-input' ).value;
    getWeatherData(city).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = ( weatherData ) => {
    //CODE GOES HERE

}

