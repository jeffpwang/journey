app.moment.controller = {
  show: {
    init: function(title, category, description, location) {
      var newMoment = new app.moment.model.new(title, category, description, location);
      app.moment.controller.show.render(newMoment);
    },

    render: function(moment) {

      if(moment.category ==="Social"){
        $("#moment_list").append('<li><div class="panel panel-primary"> <div class="panel-body">' + moment.title + '</div> <div class="panel-footer">' + moment.description + "</div> </div></li>")
      }else if(moment.category ==="Entertainment"){
         $("#moment_list").append('<li><div class="panel panel-danger"> <div class="panel-body">' + moment.title + '</div> <div class="panel-footer">' + moment.description + "</div> </div></li>")
      } else if(moment.category === "Work"){
         $("#moment_list").append('<li><div class="panel panel-warning"> <div class="panel-body">' + moment.title + '</div> <div class="panel-footer">' + moment.description + "</div> </div></li>")
      } else if(moment.category === "Wellness"){
         $("#moment_list").append('<li><div class="panel panel-info"> <div class="panel-body">' + moment.title + '</div> <div class="panel-footer">' + moment.description + "</div> </div></li>")
      } else{
         $("#moment_list").append('<li><div class="panel panel-default"> <div class="panel-body">' + moment.title + '</div> <div class="panel-footer">' + moment.description + "</div> </div></li>")
      }
      // $("#moment_list").append("<li>" + moment.title + "</li>");
      $("#moment_title").val("");
      $("#category_dropdown").text("Pick one");
      $("#moment_description").val("");
      $("#address").val("");
    }
  }
}


