$(document).ready(function() {
    $("form#vacation").submit(function(event) {
      var age = parseInt($("input#age").val());
      var activity = $("select#activity").val();
      var beach = $("select#beach").val();

      if (age < 40) {
        if (activity === "restful") {
          if (beach === "tropical") {
            var name = "Kauai, Hawaii"
            $("#vacationName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Big Sur, California"
            $("#vacationName").empty().append(name);
            $("#result").show();
          }
        } else {
          if (beach === "tropical") {
            var name = "Phuket, Thailand"
            $("#vacationName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Santa Cruz, California"
            $("#vacationName").empty().append(name);
            $("#result").show();
          }
        }
      } else if (age >= 40) {
        if (activity === "restful") {
          if (beach === "tropical") {
            var name = "Aruba"
            $("#vacationName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Miami, Florida"
            $("#vacationName").empty().append(name);
            $("#result").show();
          }
      } else {
        if (beach === "tropical") {
            var name = "Railay, Thailand"
            $("#vacationName").empty().append(name);
            $("#result").show();
        } else {
            var name = "Puerto Vallarta, Mexico"
            $("#vacationName").empty().append(name);
            $("#result").show();
            }
        }
      } else {
          alert("Please enter your age");
        }
        event.preventDefault();
    })
});