$(document).ready(function(){

  //DEFAULT CONTENT
  let defaultcontent = "<h1>General Information</h1><p>Super Smash Bros. Ultimate is a 2D side-scrolling fighting game featuring a "
  + "diverse group of characters from the Nintendo franchise. With at least 70 available characters to choose from,"
  + " this game will be fun to play for up to eight players! Available on the Nintendo Switch starting on December 7, 2018.</p>";

  $("#content").append(defaultcontent);

  //AJAX CALL FOR CLICKING #getFutureCharacters
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

  //AJAX CALL FOR CLICKING #getCharacters
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
                  + "<p>Here is a sample list of characters found in Super Smash Bros. Ultimate!</p><ul class='uldesktop'>";
             for (var i = 0; i < data.length; i++) {
                htmlStr += "<li><div class='divborder'><img class='charimg' + src='" + data[i].image
                + "'><div class='centertext'>" + data[i].name + "</div></div></li>";
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

  //AJAX CALL FOR CLICKING #getUs
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

  //AJAX CALL FOR CLICKING #getInfo
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
