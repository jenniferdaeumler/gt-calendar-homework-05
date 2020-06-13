$(document).ready(function () {
  //Create time blocks for hours of workday
  //Color blocks with past, present, future
  //Click on time block, type an event
  //Click save button to save
  //Saved in local storage

  //**Create variables**//
  var date = moment().format("dddd, MMMM Do");
  console.log(date);
  var calRowEl = $("<row>");
 

  var hoursArray = [
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
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
console.log(calHours); //WORKS
//Create rows for each hour
//Append calendar rows to the "time table" styling
calRowEl.text(hoursArray[i]);
calRowEl.addClass("row'"); //??
$("#cal-container").append(calRowEl)

};

  //**Function calls**//

  //**Event listeners**//
});
