function dateTracker() {
  var timeDisplayEl = $("#time-display");
  var timeDisplay = dayjs().format("MMM D, YYYY @ hh:mm:ss a");
  timeDisplayEl.text(timeDisplay);
}
setInterval(dateTracker, 1000);

var relativeTime = $(".hora");
var hour = dayjs().hour();

function currentHour() {
  
  for (var h = 0; h < relativeTime.length; h++) {
    var elementID = relativeTime[h];
    var manipID = Number(relativeTime[h].getAttribute("id").split('-')[1]);
    $(relativeTime[h]).removeClass("past", "present", "future");
    //console.log(manipID, hour, elementID);

    if (manipID < hour) {
      $(elementID).addClass("past");
    } else if (manipID > hour) {
      $(elementID).addClass("future");
    } else {
      $(elementID).addClass("present");
    }
  }
}

currentHour();

registerdTask();

var task = $(".description");
var output = $(".hora");
var saveBtn = $(".saveBtn");

saveBtn.addEventListener("click", registerdTask);

output.textContent = localStorage.getItem("task");
task.value = localStorage.getItem("task");

function registerdTask() {
  localStorage.setItem("task", task);
  output.textContent = task;
} 
