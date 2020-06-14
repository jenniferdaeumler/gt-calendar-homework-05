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
  var eventEl = $("<div>").addClass("col-10 textarea time-sensitive"); //style?
  var calHourColumnsEl = $("<div>").addClass("col-1 hour");
  var timeBlockEl = $("<div>").addClass("container time-block");
  var saveButtonColEl = $("<div>").addClass("col-1 display-icon saveBtn btn");
  saveButtonColEl.addClass("i fas fa-lock");
  //do I need to create <p> inside of event rows for text?

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
      $(calRowEl).append(calHourColumnsEl);
      //Hour of day text inside column
      $(calHourColumnsEl).text(calHours);
      //Schedule events column
      $(calRowEl).append(eventEl);
      //The container
      $(timeBlockEl).append(calRowEl);
      $(".container").append(timeBlockEl);
      //Save button
      $(calRowEl).append(saveButtonColEl);
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

  //End .ready
});
