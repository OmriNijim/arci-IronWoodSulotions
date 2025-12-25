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
        if (cTypeArr[i].checked) cType.push(cTypeArr[i].value);
    }

    // build the order object
    var order = {
        fname: name,
        prefixes: prefix,
        phone: prefix + phone,
        email: email,
        msg: msg,
        machineType: machineType,
        cType: cType
    };
    OrderLogic.addOrder(order);
    // validation you already wanted
    var alertMsg = "";
    if (name === "") alertMsg += "Please enter your name.\n";
    if (email === "") alertMsg += "Please enter your email.\n";
    if (msg === "") alertMsg += "Please enter your message.\n";
    if (machineType === "") alertMsg += "Please select a machine.\n";
    if (cType.length === 0) alertMsg += "Please select Client Type.\n";

    if (alertMsg !== "") {
        alert(alertMsg);
        document.getElementById("res").innerHTML = "";
        return false;
    }

 

    var output = "Hello " + name + "!<br>";
    output += "We appreciate your interest in <b>" + machineType + "</b> machine.<br>";
    output += "Message:<br>" + msg + "<br>";
    output += "Client type: " + cType[0] + "<br>";
    output += "Phone: " + prefix + phone + "<br><br>";
    output += "<b>Saved orders count:</b> " + LocalData.orders.length;

    document.getElementById("res").innerHTML = output;
    return false;
    

    // print + prove saved
    var output = "Hello " + name + "!<br>";
    output += "We appreciate your interest in <b>" + machineType + "</b> machine.<br>";
    output += "Message:<br>" + msg + "<br>";
    output += "Client type: " + cType[0] + "<br>";
    output += "Phone: " + prefix + phone + "<br><br>";
    output += "<b>Saved orders count:</b> " + LocalData.orders.length;

    document.getElementById("res").innerHTML = output;
    return false;
}

// DO NOT TOUCH (as you asked)
function check() {
    var prefix = document.getElementById("prefixes").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var agents = {
        prefixes: prefix,
        phone: prefix + phone,
        email: email,
        password: password
    };
}