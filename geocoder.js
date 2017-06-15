var geocoder = require ('geocoder');
var place = process.argv;
var address = "";

for (var i=2; i<place.length; i++) {
	address = address + " " + place[i];
}

console.log(address);

geocoder.geocode(address, function ( err, data ) {
    console.log(JSON.stringify(data, null, 2));
});
