app.journey.controller = {
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
} // ends controller