// Function to generate and display the order summary based on user input
function generateText() {

  // Retrieve values from the input fields
  var name = document.getElementById("fname").value;
  var prefix = document.getElementById("prefixes").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var machineType = document.getElementById("machineType").value;

  // Retrieve the selected client type radio button
  var cTypeArr = document.getElementsByName("cType");
  var cType = [];
  for (var i = 0; i < cTypeArr.length; i++) {
    if (cTypeArr[i].checked) {
      cType.push(cTypeArr[i].value);
    }
  }

  // Initialize variable to hold error messages
  var alertMsg = "";

  // Validation checks: Ensure all required fields are filled
  if (name == "") alertMsg += "Please enter your name.\n";
  if (email == "") alertMsg += "Please enter your email.\n";
  if (msg == "") alertMsg += "Please enter your message.\n";
  if (machineType == "") alertMsg += "Please select a machine.\n";
  if (cTypeArr.length == 0) alertMsg += "Please select Client Type.\n";

  // If there are validation errors, display them and stop function execution
  if (alertMsg != "") {
    document.getElementById("res").innerHTML = ""; // Clear previous results
    alert(alertMsg); // Show alert popup
    return false; // Prevent form submission
  }

  // If validation passes, construct the success message
  var output = "Hello " + name + "!<br>";
  output += "we appreciate your instrest in " + machineType + " Machine.<br>";
  output += "Our team will contact you shortly with further details";

  // Display the success message in the 'res' element
  document.getElementById("res").innerHTML = output;

  return false; // Prevent actual form submission (page reload) for this demo
}

// Function to clear all input fields in the form
function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("msg").value = "";
  document.getElementById("machineType").value = "";

  // Reset dropdowns to their first option (default)
  document.getElementById("machineType").selectedIndex = 0;
  document.getElementById("prefixes").selectedIndex = 0;

  // Uncheck all radio buttons
  var cTypeArr = document.getElementsByName("cType");
  for (var i = 0; i < cTypeArr.length; i++) {
    cTypeArr[i].checked = false;
  }

  // Clear the result message area
  document.getElementById("res").innerHTML = "";
}
