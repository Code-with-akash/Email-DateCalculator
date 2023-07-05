function calculateFutureDate() {
  var selectedDate = dateInput.value;
  var selectedTime = timeInput.value;
  var numberOfDays = parseInt(daysInput.value);
  var selectedTimeZone = timeZoneSelect.value;

  // Check if the inputs are valid
  if (!selectedDate || !selectedTime || isNaN(numberOfDays)) {
    result.innerHTML = "Please select a valid date and time!";
    return;
  }

  // Convert date and time to milliseconds
  var dateTime = new Date(selectedDate + 'T' + selectedTime + ':00');
  var milliseconds = dateTime.getTime();

  // Calculate the milliseconds to add based on the number of days
  var millisecondsToAdd = numberOfDays * 24 * 60 * 60 * 1000;

  // Calculate the future date and time in the selected time zone
  var futureDateTime = new Date(milliseconds + millisecondsToAdd);
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  var futureDate = futureDateTime.toLocaleDateString('en-US', options);
  var futureTime = futureDateTime.toLocaleTimeString('en-US', { timeZone: selectedTimeZone });

  // Prepare the message with the future date and time
  var message = 'Future Date: ' + futureDate + ' & Time is: ' + futureTime;

  // Display the result in the result div
  result.innerHTML = message;
}
