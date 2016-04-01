 function JourneyController(){
    this.hideForm = function(){
      if(app.journey.all.length > 0 || $("#journey_title").val() !== "" && $("#journey_date").val() !== ""){
        $("#add_moment").show();
      }
    }
    this.createJourney = function(){
      var title = $("#journey_title").val();
      var date = $("#journey_date").val();
      var newJourney = new app.journey.new(title, date);
      $("#journey_header").text(title + " - " + date)
      $("#add_journey").hide();
    }
  }

JourneyController.prototype.initialize = function(){
  var self = this;
  $("#add_moment").hide();
  $("#add_journey input:submit").on('click', function(event){
    event.preventDefault()
    self.hideForm();
    self.createJourney();
    })


}





