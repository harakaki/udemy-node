const request = require('request');

const getForecast = (location, lat, long, callback) => {
    console.log('lat: ' + lat);
    console.log('long: ' + long);

    const wheaterUrl = 'https://api.darksky.net/forecast/3a840adb15178f979078008849928cfb/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long);

    request({url: wheaterUrl, json: true}, (error, response) => {

        if(error) {
            callback(error, undefined);
        }else {
            callback(undefined
                , {location: location
                    , body: response.body
                }
            );
        }
    });
}

module.exports = getForecast;