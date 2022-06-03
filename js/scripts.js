// UI Logic

$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
      const nameInput= $("input#name").val();
      const dateInput= $("input#appointmentDate").val();
      const timeInput= $("input#appointmentTime").val();

      $(".name").text(nameInput);
      $(".appointmentDate").text(dateInput);
      $(".appointmentTime").text(timeInput);

      $("#appointmentConfirm").show();
      
  });
});