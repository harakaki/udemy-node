const getForecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

geocode('Boston', (error, data) => {

    if(error) {
        console.log(error);
    }else {
        getForecast(data.location, data.latitude, data.longitude, (error, response) => {
            console.log('error: ' + error);
            console.log('data: ' + response);

            if(error) {
                console.log('')
            }else {
                console.log('The weather for ' + response.location + ' will be ' + response.body.currently.temperature);
            }
        });
    }

});