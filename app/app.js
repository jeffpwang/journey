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
    app.moment.controller.show.init(description);
    // app.moment.controller.show.revealMoment(title, date);
  });
  
})

var app = {};

app.journey = {

  model: {
    all: [],

    new: ( function() {
              var counter = 0;
              var journey = function Journey(title, date) {
                this.title = title; 
                this.date = date; 
                this.moments = [];
                var self = this; 

                function initialize() {
                 counter++; 
                 self.id = counter; 
                 app.journey.model.all.push(self);  
                };

                initialize();
              };
            return journey;
          }())
  }, // ends model

  controller: {
    show: {
      init: function(title, date) {
        var newJourney = new app.journey.model.new(title, date);
        app.journey.controller.show.render(newJourney);
      },

      render: function(journey) {
        $("#journey_header").text(journey.title + " - " + journey.date)
        $("#add_journey").hide();
      },

      revealMoment: function(title, date) {
        if(app.journey.model.all.length > 0 || title !== "" && date !== ""){
          $("#add_moment").show();
        }
      }
    }
  }
}

