function generateText() {

  var name = document.getElementById("fname").value;
  var prefix = document.getElementById("prefixes").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg").value;
  var machineType = document.getElementById("machineType").value;

  var cTypeArr = document.getElementsByName("cType");
  var cType = [];
  for (var i = 0; i < cTypeArr.length; i++) {
    if (cTypeArr[i].checked) {
      cType.push(cTypeArr[i].value);
    }
  }

  var alertMsg = "";

  if (name == "") alertMsg += "Please enter your name.\n";
  if (email == "") alertMsg += "Please enter your email.\n";
  if (msg == "") alertMsg += "Please enter your message.\n";
  if (machineType == "") alertMsg += "Please select a machine.\n";
  if (cTypeArr.length == 0) alertMsg += "Please select Client Type.\n";

  if (alertMsg != "") {
    document.getElementById("res").innerHTML = "";
    alert(alertMsg);
    return false;
  }

  var output = "Hello " + name + "!<br>";
  output += "we appreciate your instrest in " + machineType + " Machine.<br>";
  output += "Our team will contact you shortly with further details";

  document.getElementById("res").innerHTML = output;

  return false;
}

function clearForm() {
  document.getElementById("fname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("msg").value = "";
  document.getElementById("machineType").value = "";

  // Reset select to first option
  document.getElementById("machineType").selectedIndex = 0;
  document.getElementById("prefixes").selectedIndex = 0;

  var cTypeArr = document.getElementsByName("cType");
  for (var i = 0; i < cTypeArr.length; i++) {
    cTypeArr[i].checked = false;
  }

  document.getElementById("res").innerHTML = "";
}
