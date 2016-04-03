$(function(){

  $("#add_moment").hide();

  $("#add_journey input:submit").on('click', function(event){
    event.preventDefault();
    var title = $("#journey_title").val();
    var date = $("#journey_date").val();
    app.journey.controller.show.init(title, date);
    app.journey.controller.show.revealMoment(title, date);
  });

  $("#add_moment input:submit").on('click', function(event){
    event.preventDefault();
    var description = $("#moment_description").val();
    var location = $("#address").val();
    app.moment.controller.show.init(description);
    
    if ($('#moment_list li').length === 1) {
      app.location.controller.initMap(location);  
    } else {
      app.location.controller.addMarker(location);
    }
  });
  
})

var app = {
  journey: {},
  moment: {},
  location: {}
};
