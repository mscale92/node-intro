var request = require('request-promise');

var GOOGLE_KEY = 'AIzaSyAYIHU0RclXqIdgWXFNcOfithtw0RCN3YM';

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
  return request('http://api.open-notify.org/iss-now.json')
  .then(function (response) {
        //console.log(response, "the raw response from our API")

        // Parse as JSON
        var issResponseObject = JSON.parse(response)
        //console.log(issResponseObject, "after parsing our response we have this object");

       //make a new object that we can return later
        var issLatLngObject = {};

       //using dot notation, assign our keys, lat and lng, the values from our parsed resposne
        issLatLngObject.lat = issResponseObject.iss_position.latitude
        issLatLngObject.lng = issResponseObject.iss_position.longitude

       //return our lat and lng object so that it can be used later!
        //console.log(issLatLngObject);
        return issLatLngObject;
          // Return object with lat and lng
    }
  )
}

function getAddressPosition(address) {
    return request('http://api.open-notify.org/iss-now.json')
        .then(function (response) {
                //console.log(response)
                // Parse as JSON
                var addressResponseObject = JSON.parse(response)
                console.log(issResponseObject);

                var addressLatLngObject = {};

                
                // Return object with lat and lng
        })
}

function getCurrentTemperatureAtPosition(position) {

}

function getCurrentTemperature(address) {

}

function getDistanceFromIss(address) {

}

getIssPosition()
.catch(err => {
    console.log(err, "ERROR!!!");
    return err;
})