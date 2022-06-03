// Business Logic
function input(name) {
  return name;
}
function input(date) {
  return date;
}
function input(time) {
  return time;
}

// UI Logic

$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
      const nameInput= $("input#name").val();
      const dateInput= $("input#date").val();
      const timeInput= $("input#time").val();

      $(".name").text(nameInput);
      $(".date").date(dateInput);
      $(".time").select(timeInput);

      $(#appointmentConfirm).show();
   
  });
}):