app.moment = {

  model: {

    all: [],

    new: ( function() {
            var counter = 0; 
            var moment = function Moment(description, location) {
              this.description = description; 
              this.journey = app.journey.model.all[0];
              this.location = location; // will update later
              var self = this; 

              function initialize() {
                counter++; 
                self.id = counter; 
                app.moment.model.all.push(self); 
                self.journey.moments.push(self); 
              };

              initialize();
            };
            return moment;
        }())
  }, // ends model

  controller: {
    show: {
      init: function(description, location) {
        var newMoment = new app.moment.model.new(description, location);
        app.moment.controller.show.render(newMoment);
      },

      render: function(moment) {
        $("#moment_list").append("<li>" + moment.description + "</li>");
        $("#moment_description").val("");
        $("#address").val("");
      }
    }
  }
}