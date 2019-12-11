const request = require('request');

const geocode = (address, callback) => {
    
    const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGVybmFuYXJha2FraSIsImEiOiJjazN5Z3ZjamswdmU2M2lwaW85MGg1ZXgxIn0.btFpgXYmvPeuMkgSO_Vx_w&limit=1';

    request({url: geoUrl, json: true}, (error, response) => {

        if(error) {
            callback(error, undefined);
        }else if(response.body.features.length === 0) {
            callback('There\'s no data to display', undefined);
        }else {
            /*
            const lat = response.body.features[0].center[0];
            const long = response.body.features[0].center[1];
            */
           console.log('Success: ');
            callback(undefined
                , {
                    longitude: response.body.features[0].center[0]
                    , latitude: response.body.features[0].center[1]
                    , location: response.body.features[0].place_name
                }
            );
        }
        
    });
}

module.exports = geocode;