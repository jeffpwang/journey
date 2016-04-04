app.location.controller = {

  markerCounter: 0,

  markers: [],

  init: (function(place) {
    return new app.location.model.new(place);
  }),

  initMap: (function (place) {
    var map;
    map = new google.maps.Map(document.getElementById('map'));
    app.location.model.map = map;
    app.location.controller.addMarker(place);
  }), // ends initMap

  addMarker: (function (place) {
    var map = app.location.model.map;
    var service = new google.maps.places.PlacesService(map);

    service.textSearch( { query: place }, function(results, status) {
      map.setCenter(results[0].geometry.location)
      map.setZoom(17);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        label: (app.location.controller.markerCounter += 1).toString()
      });
      app.location.controller.markers.push(marker);
    });
  }), //ends addMarker

  repositionMap: (function() {
    var map = app.location.model.map;
    var bounds = map.getBounds();
    var markers = app.location.controller.markers;

    markers.forEach(function(marker) {
      bounds.extend(marker.getPosition());
    });

    map.fitBounds(bounds);
  }) // ends reposition map
  
} // ends controller














