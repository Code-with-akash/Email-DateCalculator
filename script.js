// When the DOM content has been loaded
document.addEventListener("DOMContentLoaded", function() {
  
    // Get the calculate button element
    var calculateBtn = document.getElementById("calculateBtn");
    
    // Add a click event listener to the calculate button
    calculateBtn.addEventListener("click", function() {
      
      // Get the input field for the start date
      var startDateInput = document.getElementById("startDate");
      
      // Create a new Date object based on the value entered in the start date input field
      var startDate = new Date(startDateInput.value);
      
      // Check if the entered start date is valid (is a valid date)
      if (isNaN(startDate.getTime())) {
        alert("Please enter a valid starting date in the format MM/DD/YYYY.");
        return; // Exit the function if the start date is invalid
      }
      
      // Get the input field for the number of days
      var numberOfDaysInput = document.getElementById("numberOfDays");
      
      // Parse the value entered in the number of days input field as an integer
      var numberOfDays = parseInt(numberOfDaysInput.value);
      
      // Check if the entered number of days is valid (is a valid number)
      if (isNaN(numberOfDays)) {
        alert("Please enter a valid number of days.");
        return; // Exit the function if the number of days is invalid
      }
      
      // Create a new Date object based on the start date
      var futureDate = new Date(startDate);
      
      // Add the number of days (plus one extra day) to the future date
      futureDate.setDate(startDate.getDate() + numberOfDays + 1);
      
      // Get the result element
      var resultElement = document.getElementById("result");
      
      // Set the text content of the result element to display the calculated future date
      resultElement.textContent = "The Date After " + numberOfDays + " days is : " + futureDate.toDateString();
    });
  });
  