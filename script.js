$(document).ready(function () {
  //Create time blocks for hours of workday
  //Color blocks with past, present, future
  //Click on time block, type an event
  //Click save button to save
  //Saved in local storage

  //**Create variables**//
  var date = moment().format("dddd, MMMM Do");
  console.log(date);

  var hoursArray = [
    "0000",
    "0100",
    "0200",
    "0300",
    "0400",
    "0500",
    "0600",
    "0700",
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700",
    "1800",
    "1900",
    "2000",
    "2100",
    "2200",
    "2300",
    "2400",
  ];
  var hoursArrayIndex = 0;
  console.log(hoursArrayIndex);
  //**Function definitions**//

  //Create date/time under heading
  $("#currentDay").text(date);
//Push time into rows
   //For loop for array of hours, push to calendar rows
for(var i = 0; i < hoursArray.length; i++){
var calHours = hoursArray[i];
console.log(calHours);
//Create rows for each hour
var calRows = $("<div class=row style='row' id='hours-rows'>")
//Append calendar rows to the "time table" styling
$("calHours").append(calRows);
console.log(calRows)
};

  //**Function calls**//

  //**Event listeners**//
});
