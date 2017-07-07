var request = require('request-promise');

// Euclidian distance between two points
function getDistance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
    return request('http://api.open-notify.org/iss-now.json')
  .then(
      function (response) {
        //console.log(response)
      // Parse as JSON
        var issResponseObject = JSON.parse(response)
        //console.log(issResponseObject);

        var issLatLngObject = {};

        issLatLngObject.lat = issResponseObject.iss_position.latitude
        issLatLngObject.lng = issResponseObject.iss_position.longitude

        console.log(issLatLngObject);
        return issLatLngObject;
          // Return object with lat and lng
    }
  )
}

function getAddressPosition(address) {

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