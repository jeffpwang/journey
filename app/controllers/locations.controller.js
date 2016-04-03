app.location.controller = {

  initMap: (function (location) {
    var map;
    var geocoder = new google.maps.Geocoder();
    var userAddress = location;

    map = new google.maps.Map(document.getElementById('map'));

    app.location.model.maps.push(map);

    geocoder.geocode( { 'address': userAddress}, function(results, status) {
      map.setCenter(results[0].geometry.location);
      map.setZoom(17);
      var marker = new google.maps.Marker({
        position: results[0].geometry.location,
        map: map,
        title: userAddress
      });
    });
  }), // ends initMap

  addMarker: (function(location) {
    var map = app.location.model.maps[0];
    var userAddress = location;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': userAddress }, function(results, status) {
      map.setCenter(results[0].geometry.location)
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    });
  }) //ends addMarker

} // ends controller