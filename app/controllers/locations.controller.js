app.location.controller = {

  markerCounter: 0,

  markers: [],

  init: (function (place) {
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

    service.textSearch( { query: place }, function (results, status) {
      map.setCenter(results[0].geometry.location)
      map.setZoom(17);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        label: (app.location.controller.markerCounter += 1).toString()
      });
      app.location.controller.markers.push(marker);

      var infowindow = new google.maps.InfoWindow({
        content: app.location.model.all.slice(-1)[0].moments.slice(-1)[0].title
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      var index = app.location.model.all.length - 1;
      app.location.model.all[index].address = results[0].formatted_address;
   
    });
  }), //ends addMarker

  repositionMap: (function () {
    var map = app.location.model.map;
    var bounds = map.getBounds();
    var markers = app.location.controller.markers;

    markers.forEach(function (marker) {
      bounds.extend(marker.getPosition());
    });

    map.fitBounds(bounds);
  }), // ends reposition map

  getDirections: (function () {
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var map = app.location.model.map;
    directionsDisplay.setMap(map);

    app.location.model.all.forEach(function(location, index) {
      if (index != 0) {
        debugger;
        calculateAndDisplayRoute(directionsService, directionsDisplay, app.location.model.all[index-1].address, location.address);
      }
    })


    function calculateAndDisplayRoute(directionsService, directionsDisplay, place1, place2) {
      debugger;
      directionsService.route({
        origin: place1,
        destination: place2,
        travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
  })
  
} // ends controller














