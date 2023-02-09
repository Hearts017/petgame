let stat_hunger = 100;
let stat_exercise = 100;
let stat_sleep = 100;
let petName = "Rathian";

setInterval(lowerHunger, 1000);
setInterval(lowerExercise, 3000);
setInterval(lowerSleep, 5000);

function displayStats() {
  $(document).ready(function () {
    $("#hungerBar").css("width", stat_hunger + "%");
    $("#exerciseBar").css("width", stat_exercise + "%");
    $("#sleepBar").css("width", stat_sleep + "%");
  });
}
function lowerHunger() {
  stat_hunger--;
  displayStats();
}

function lowerExercise() {
  stat_exercise--;
  displayStats();
}

function lowerSleep() {
  stat_sleep--;
  displayStats();
}

$(document).ready(function () {
  $("#foodButton").click(function () {
    stat_hunger = 100;
    stat_sleep -= 5;
    $("#last_activity").text("Fed " + petName + "!");
    displayStats();
  });
  $("#exerciseButton").click(function () {
    stat_exercise = 100;
    $("#last_activity").text("Played with " + petName + "!");
    displayStats();
  });
  $("#sleepButton").click(function () {
    stat_sleep = 100;
    $("#last_activity").text(petName + " took a nap!");
    displayStats();
  });
});
