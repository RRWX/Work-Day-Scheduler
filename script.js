// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var currentDayText = $('#currentDay');


var today = dayjs();
var hour = today.format('h');
var timeBlock = $('.time-block');
var amPm = today.format('a')
// var me  = document.querySelector('.description');
var saveBtn = $(".saveBtn");

console.log(amPm);
$(function () {
 
  saveBtn.on('click', function(event) {
    var timeBlockId = event.target.closest('.time-block').id;
    var description = event.target.closest('.time-block').querySelector('.description').value;
    localStorage.setItem(timeBlockId, description);
    // var thing = localStorage.getItem(description);
    // var thing2 = localStorage.getItem(timeBlockId);
    // console.log(thing2);
    // console.log(timeBlockId);
    // console.log(thing);
  });  
  
  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
    for(var i=0;i < timeBlock.length;i++){
      // timeBlock[i]);
      // console.log(hour);
      timeBlock[i].classList.add('past');
      if(timeBlock[i].id.substr(5)==hour){
        timeBlock[i].classList.add('present');
          for(var j=i+1;j < timeBlock.length;j++){
            timeBlock[j].classList.add('future');
          }
      }
        timeBlock[i].classList.add('future');
      }

      

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  // Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM, D, YYYY'));
    });
 