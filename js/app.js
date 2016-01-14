$(document).ready(function() {
    $("form#celebrity").submit(function(event) {
      var age = parseInt($("input#age").val());
      var gender = $("select#gender").val();
      var personality = $("select#personality").val();

      if (age < 40) {
        if (gender === "male") {
          if (personality === "funny") {
            var name = "Ryan Gosling"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Adam Driver"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          }
        } else {
          if (personality === "funny") {
            var name = "Jennifer Lawrence"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Emma Watson"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          }
        }
      } else if (age >= 40) {
        if (gender === "male") {
          if (personality === "funny") {
            var name = "Bill Murray"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Sean Penn"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          }
      } else {
        if (personality === "funny") {
            var name = "Tina Fey"
            $("#celebrityName").empty().append(name);
            $("#result").show();
        } else {
            var name = "Helen Hunt"
            $("#celebrityName").empty().append(name);
            $("#result").show();
            }
        }
      } else {
          alert("Please enter your age");
        }
        event.preventDefault();
    })
});