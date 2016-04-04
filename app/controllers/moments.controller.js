app.moment.controller = {
  show: {
    init: function(title, category, description, location) {
      var newMoment = new app.moment.model.new(title, category, description, location);
      app.moment.controller.show.render(newMoment);
    },

    render: function(moment) {

      $("#moment_list").append("<li>" + moment.title + "</li>");
      $("#moment_description").val("");
      $("#address").val("");
    }
  }
}