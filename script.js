function calculateFutureDate() {
  var dateInput = document.getElementById("dateInput");
  var daysInput = document.getElementById("daysInput");
  var timeInput = document.getElementById("timeInput");
  var result = document.getElementById("result");

  var selectedDate = dateInput.value;
  var numberOfDays = parseInt(daysInput.value);
  var selectedTime = timeInput.value;

  // Check if the inputs are valid
  if (!selectedDate || isNaN(numberOfDays) || !selectedTime) {
    result.innerHTML = "Please select a valid date & time, and number of days!";
    return;
  }

  // Convert the selected date to a Date object
  var date = new Date(selectedDate);

  // Add the number of days to the selected date
  date.setDate(date.getDate() + numberOfDays);

  // Get the hours and minutes from the selected time
  var time = selectedTime.split(":");
  var hours = parseInt(time[0]);
  var minutes = parseInt(time[1]);

  // Set the hours and minutes to the selected time
  date.setHours(hours);
  date.setMinutes(minutes);

  // Format the future date and time
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  var formattedDateTime = date.toLocaleDateString('en-US', options);

  // Prepare the message with the future date and time
  var message = 'Future Date and Time is : ' + formattedDateTime + "<br>It is recommended that you add 15 minutes to this time to ensure best practice";

  // Display the result
  result.innerHTML = message;
}
