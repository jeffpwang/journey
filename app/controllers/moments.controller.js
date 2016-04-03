app.moment.controller = {
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