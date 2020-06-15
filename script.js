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
  var currentTime = moment().format("HH");
  console.log(currentTime);
  //Saved activity from localStorage
  // var savedActivity = localStorage.getItem(textKey);
  // console.log(savedActivity);

  //Create array for times
  var hoursArray = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
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
      var eventEl = $("<textarea class= 'col-10 time-sensitive form'>"); //style?
      var calHourColumnsEl = $("<div class= 'col-1 hour'>");
      var saveButtonColEl = $(
        "<div class= 'col-1 btn saveBtn display-icon i fas fa-lock'>"
      );
      //Hour column append
      calHourColumnsEl.text(calHours);
      //Row appended with items
      calRowEl.append(calHourColumnsEl).append(eventEl).append(saveButtonColEl);
      //ID for rows w/ hours
      eventEl.attr("id", calHours);

      //Container appended with all row elements
      $(".container").append(calRowEl);

      if (calHours.match(currentTime)) {
        $(eventEl).addClass("present");
      } else if (calHours < currentTime) {
        $(eventEl).addClass("past");
      } else {
        $(eventEl).addClass("future");
      }
    }
    //Conditional for styling event columns based on time of day using moment
  }
  scheduleApperance();

  //**Function calls**//

  //**Event listeners**//
  // //Undefined key, value text way, no console errors
  // $(".saveBtn").on("click",function(event){
  //     event.preventDefault();
  //     var activityText = $(".textarea").value;
  //     localStorage.setItem(activityText, "text");
  //     console.log("clicked save");
  // })

  // //NULL way, no console errors
  // var activityText = JSON.parse(localStorage.getItem(".textarea"));
  // $(".saveBtn").on("click", function (event) {
  //     event.preventDefault();
  //     localStorage.setItem(activityText, JSON.stringify(activityText));
  //     console.log("clicked save");
  // });

  $(document).on("click", ".btn", function (event) {
    //this applied anywhere removes everything but 9am!
    // localStorage.getItem("activity");
    event.preventDefault();
    var textValue = $(this).siblings("textarea").val();
    var textKey = $(this).siblings("textarea").attr("id");
    console.log(textKey, textValue);
    localStorage.setItem(textKey, textValue);
    var savedActivity = localStorage.getItem(textKey);
    console.log(savedActivity);
   
  });
  //End .ready
});
