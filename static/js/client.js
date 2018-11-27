$(document).ready(function(){
  $('#mainMenu #getDate').click(function(e) {

      // don't allow the anchor to visit the link
      e.preventDefault();

      $.ajax({
          url: "/ajax-GET",
          dataType: "json",
          type: "GET",
          success: function(data) {
              $("#p1").text(data['msg']);
              console.log("SUCCESS:", data);

          },
          error: function(jqXHR, textStatus, errorThrown) {
              $("#p1").text(jqXHR.statusText);
              console.log("ERROR:", jqXHR, textStatus, errorThrown);
          }

      });
  });
});
