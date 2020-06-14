$(document).ready(function () {
  //Create time blocks for hours of workday
  //Color blocks with past, present, future
  //Click on time block, type an event
  //Click save button to save
  //Saved in local storage

  //**Create variables**//

  //Create date/time
  var date = moment().format("dddd, MMMM Do");
  console.log(date);
  //Display date under header
  $("#currentDay").text(date);
  //Moment time "09" = 9:00am
  var currentTime = moment().format("hA");
  console.log(currentTime);

  //Create array for times
  var hoursArray = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  //**Function definitions**//
  //Push time into rows
  //For loop for array of hours
  function scheduleApperance() {
    for (var i = 0; i < hoursArray.length; i++) {
      var calHours = hoursArray[i];
      console.log(calHours); //WORKS
      //Create calendar rows/columns w/ all other given CSS elements
      //Append calendar rows to the "time table" styling
      //Column for hours
      var calRowEl = $("<div class='row time-block'>");
      var eventEl = $("<textarea class= 'col-10 time-sensitive'>"); //style?
      var calHourColumnsEl = $("<div class= 'col-1 hour'>");
      var saveButtonColEl = $(
        "<div class= 'col-1 btn saveBtn display-icon i fas fa-lock'>"
      );
      //Row appended with items
      calRowEl.append(calHourColumnsEl).append(eventEl).append(saveButtonColEl);
      //Hour column append
      calHourColumnsEl.text(calHours);
      //Containter appended with all row elements
      $(".container").append(calRowEl);
    }
    //Conditional for styling event columns based on time of day using moment
 
  }
  scheduleApperance();



  //**Function calls**//

  //**Event listeners**//

$(".saveBtn").on("click",function(event){
    event.preventDefault();
    console.log("clicked save");
})


  //End .ready
});
