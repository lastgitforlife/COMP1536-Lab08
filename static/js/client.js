$(document).ready(function(){

  $('#getFutureCharacters').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
        url: "/ajax-GET-list",
        dataType: "html",
        type: "GET",
        data: {format: "html-list"},
        success: function(data) {
          console.log("SUCCESS HTML:", data);
          $("#content").html(data);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }

    });
  });



  $('#getCharacters').click(function(e) {

        // don't allow the anchor to visit the link
      e.preventDefault();

      $.ajax({
        url: "/ajax-GET-list",
        dataType: "json",
        type: "GET",
        data: { format: "json-list"},
        success: function(data) {
             console.log("SUCCESS JSON:", data);

            // $("#content").append("<div><ul>" + data[0].name + data[0].image + "</ul></div>");

             var div = $("#content");
             let htmlStr = "<div><ul>";
             for (var i = 0; i < data.length; i++) {
                htmlStr += "<li><div class='caption_name'><div class='divborder'><img class='charimg' id='smash" + i + "' src='" + data[i].image + "'></div><div>" + data[i].name + "</div></div></li>";
             }
             htmlStr += "</ul>";
             div.empty();
             div.append(htmlStr);
              //  console.log("SUCCESS JSON:", data[i]);
                //htmlStr += "<li>" +  data[i] + "</li>";
            //}

            //for (let i = 0; i < 3; i++) {
              //  div.append(data[i]);
            //}

            //htmlStr += "</ul>";
            //div.append(htmlStr);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
          }
      });
  });

});
