$(function(){

  $("#add_moment").hide();
  $('#moments button').hide();

  $("#add_journey input:submit").on('click', function(event){
    event.preventDefault();
    var title = $("#journey_title").val();
    var date = $("#journey_date").val();
    app.journey.controller.show.init(title, date);
    app.journey.controller.show.revealMoment(title, date);
  }); // ends add journey listener

  $("#add_moment input:submit").on('click', function(event){
    event.preventDefault();
    $('#moments button').show();
    var title = $("#moment_title").val();
    var category = $("#category_dropdown").text();
    var description = $("#moment_description").val();
    var place = $("#address").val();
    var location = app.location.controller.init(place);
    app.moment.controller.show.init(title, category, description, location);
    
    if ($('#moment_list li').length === 1) {
      app.location.controller.initMap(location.place);  
    } else {
      app.location.controller.addMarker(location.place);
      var map  = app.location.model.map;
      // zoom to fit all markers on map
      google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        app.location.controller.repositionMap();
      });
    }
  }); //ends add_moment click listener

  $(".dropdown-item").on("click", function(){
    var choice = $(this).text()
    $("#category_dropdown").text(choice)

  });

  $('#moments button').on("click", function(event){
    event.preventDefault();
    app.location.controller.getDirections();
  });

  // map.fitBounds(bounds);
  // var listener = google.maps.event.addListener(map, "idle", function() { 
  //   if (map.getZoom() > 16) map.setZoom(16); 
  //   google.maps.event.removeListener(listener); 
  // });
  
});

var app = {
  journey: {},
  moment: {},
  location: {}
};
