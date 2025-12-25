// ORDER FORM HANDLER (order_machine.html)
function generateText() {
    var name = document.getElementById("fname").value.trim();
    var prefix = document.getElementById("prefixes").value;
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var msg = document.getElementById("msg").value.trim();
    var machineType = document.getElementById("machineType").value;

    // client type from radios (note: name changed in HTML to "Client Type")
    var cTypeArr = document.getElementsByName("Client Type");
    var cType = [];
    for (var i = 0; i < cTypeArr.length; i++) {
        if (cTypeArr[i].checked) cType.push(cTypeArr[i].value);
    }

    // build order object
    var order = {
        fname: name,
        prefixes: prefix,
        phone: prefix + phone,
        email: email,
        msg: msg,
        machineType: machineType,
        cType: cType
    };

    // UI-level validation
    var alertMsg = "";
    if (name === "") alertMsg += "Please enter your name.\n";
    if (email === "") alertMsg += "Please enter your email.\n";
    if (msg === "") alertMsg += "Please enter your message.\n";
    if (machineType === "") alertMsg += "Please select a machine.\n";
    if (cType.length === 0) alertMsg += "Please select Client Type.\n";

    if (alertMsg !== "") {
        alert(alertMsg);
        var resElem = document.getElementById("res");
        if (resElem) resElem.innerHTML = "";
        return false; // stop submit if invalid
    }

    // business logic: save to localStorage via DAL
    var result = OrderLogic.addOrder(order);
    if (!result.success) {
        alert(result.message);
        return false; // stop submit if logic failed
    }

    // show summary on the page (for this visit)
    var output = "Hello " + name + "!<br>";
    output += "We appreciate your interest in <b>" + machineType + "</b> machine.<br>";
    output += "Message:<br>" + msg + "<br>";
    output += "Client type: " + cType[0] + "<br>";
    output += "Phone: " + prefix + phone + "<br><br>";
    output += "<b>Saved orders count:</b> " + LocalData.orders.length;

    var resElem2 = document.getElementById("res");
    if (resElem2) resElem2.innerHTML = output;

    return true;
}

// Clear order form (order_machine.html)
function clearForm() {
    document.getElementById("fname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("machineType").selectedIndex = 0;
    document.getElementById("prefixes").selectedIndex = 0;

    var cTypeArr = document.getElementsByName("Client Type");
    for (var i = 0; i < cTypeArr.length; i++) {
        cTypeArr[i].checked = false;
    }

    var res = document.getElementById("res");
    if (res) res.innerHTML = "";
}


// WORKER FORM HANDLER (worker.html)
function check() {
    var prefix = document.getElementById("prefixes").value;
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    var agent = {
        phone: prefix + phone,
        email: email,
        password: password
    };

    var result = AgentsLogic.addAgent(agent);

    if (!result.success) {
        alert(result.message);
        return false;
    }

    alert("Worker saved successfully.");
    return false; // prevent real submit / page reload
}


// Clear worker form (worker.html)
function clearForm1() {
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("prefixes").selectedIndex = 0;
}

//  WEB3FORMS INTEGRATION
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");
    const resBox = document.getElementById("res");

    // orderForm exists only on order_machine.html, so guard for other pages
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // existing UI validation + summary + localStorage
        if (!generateText()) return;

        const formData = new FormData(form);

        // show sending message
        if (resBox) {
            resBox.innerHTML += "<br><i>Sending email...</i>";
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                alert("Success! Your request was sent.");
                form.reset();
            } else {
                alert("Email error: " + data.message);
            }

        } catch (error) {
            alert("Something went wrong while sending email.");
        }
    });
});
