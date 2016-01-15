$(document).ready(function() {
    $("form#vacation").submit(function(event) {
      var activity = $("select#activity").val();
      var adventure = $("select#adventure").val();
      var relax = $("select#relax").val();
      var budget = $("select#budget").val();
      var altitude = $("select#altitude").val();
      var total = 0;
     
      var activityArray = ["Thailand, Puerto Vallarta, Aruba", "Cambodia, Egypt, Jordan", "London, Paris, Bangkok", "New Delhi, South Africa, Mexico", "Tibet, Kenya, Peru"];
      var arrayFields = [activity, adventure, relax, budget, altitude];
      for (i = 1; i < arrayFields.length; i++) {
        if (arrayFields[i] == "true") {
           total = total + 1;
        }
      }
      
        $("#vacationName").empty().append(activityArray[total]);
        $("#result").show();

        event.preventDefault();
    });
});