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

             var div = $("#content");
             let htmlStr = "<div><h1>Sample Character List</h1>"
                  + "<p>Here is a sample list of characters found in Super Smash Bros. Ultimate!</p><ul>";
             for (var i = 0; i < data.length; i++) {
                htmlStr += "<li><div class='caption_name'><div class='divborder'><img class='charimg' id='smash"
                + i + "' src='" + data[i].image + "'></div><div>" + data[i].name + "</div></div></li>";
             }
             htmlStr += "</ul></div>";
             div.empty();
             div.append(htmlStr);

        },
        error: function(jqXHR, textStatus, errorThrown) {
            $("#content").text(jqXHR.statusText);
            console.log("ERROR:", jqXHR, textStatus, errorThrown);
          }
      });
  });

  $('#getUs').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
        url: "/ajax-GET-list",
        dataType: "html",
        type: "GET",
        data: {format: "getAboutUs"},
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

  $('#getInfo').click(function(e) {

    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
        url: "/ajax-GET-list",
        dataType: "html",
        type: "GET",
        data: {format: "getGeneralInformation"},
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


});
