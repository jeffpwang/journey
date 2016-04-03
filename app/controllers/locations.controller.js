app.location.controller = {

  init: (function(address) {
    return new app.location.model.new(address);
  }),

  initMap: (function (address) {
    var map;
    map = new google.maps.Map(document.getElementById('map'));
    app.location.model.map = map;
    app.location.controller.addMarker(address);
  }), // ends initMap

  addMarker: (function (address) {
    var map = app.location.model.map;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode( { 'address': address }, function(results, status) {
      map.setCenter(results[0].geometry.location)
      map.setZoom(17);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    });
  }) //ends addMarker

} // ends controller