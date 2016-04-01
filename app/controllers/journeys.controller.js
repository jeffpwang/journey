app.journey.controller = {
  new: function JourneyController(){
    JourneyController.prototype.initialize = function(){
    var title = $("#journey_title").val();
    $("#add_moment").hide();
    $("#add_journey input:submit").on('click', function(event){
      event.preventDefault()
        if(app.journey.all.length > 0 || $("#journey_date").val() !== ""){
          $("#add_moment").show();
        }
      })
    }
    
  }

}




