// Function to calculate the future date and time
function calculateFutureDate() {
  // Get the input values
  var selectedDate = dateInput.value;
  var selectedTime = timeInput.value;
  var numberOfDays = parseInt(daysInput.value);

  // Convert date and time to milliseconds
  var dateTime = new Date(selectedDate + ' ' + selectedTime);
  var milliseconds = dateTime.getTime();

  // Calculate the milliseconds to add based on the number of days
  var millisecondsToAdd = numberOfDays * 24 * 60 * 60 * 1000;

  // Calculate the future date and time
  var futureDateTime = new Date(milliseconds + millisecondsToAdd);

  // Extract the future date and time components
  var futureDate = futureDateTime.toDateString();
  var futureTime = futureDateTime.toLocaleTimeString();

  // Prepare the message with the future date and time
  var message = 'Future Date: ' + futureDate + '\nFuture Time: ' + futureTime;

  // Display the future date and time in an alert message
  alert(message);
}
