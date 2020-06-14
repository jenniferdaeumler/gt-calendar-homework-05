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
  var currentTime = moment().format("LTS");
  console.log(currentTime);

  //Create column for times
  var hoursArray = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
  //   var hoursArrayIndex = 0;
  //   console.log(hoursArrayIndex);
  var calRowEl = $("<div>").addClass("row");
  var eventEl = $("<div>").addClass("col-10 textarea"); //style?
  var calHourColumnsEl = $("<div>").addClass("col-1 hour");
  var timeBlockEl = $("<div>").addClass("container time-block");
  var saveButtonColEl = $("<div>").addClass("col-1 saveBtn");
  //do I need to create <p> inside of event rows for text?

  //**Function definitions**//
  //Push time into rows
  //For loop for array of hours
  function scheduleApperance() {
    for (var i = 0; i < hoursArray.length; i++) {
        console.log(hoursArray[i]);
      // calHours= hoursArray[i]; //Looks the same as when I replaced text.(hoursArray[i] with calHours)
      // console.log(calHours); //WORKS
    //Create calendar rows/columns w/ all other given CSS elements
    //Append calendar rows to the "time table" styling
      $(calRowEl).append(calHourColumnsEl);
      $(calHourColumnsEl).text(hoursArray[i]);
      $(calRowEl).append(eventEl);
      $(timeBlockEl).append(calRowEl);
      $(".container").append(timeBlockEl);
      $(calRowEl).append(saveButtonColEl);
      $(eventEl).text("hello");
      $(saveButtonColEl).text("SAVE");
    }
  }
  scheduleApperance();

  //conditions for styling rows based on time
  function hourRowColors() {
    if (eventEl === currentTime) {
      $(eventEl).addClass("present");
    } else if (eventEl < currentTime) {
      $(eventEl).addClass("past");
    } else {
      $(eventEl).addClass("future");
    }
  }
  hourRowColors();

  //**Function calls**//

  //**Event listeners**//
});
