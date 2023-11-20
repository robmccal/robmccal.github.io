backgroundToggle();
function backgroundToggle() {
    let backgroundChange = document.getElementsByClassName("weTranfer")[0];
    setTimeout(() => {
        backgroundChange.style.background = "#023020";
    }, 100);

    setTimeout(() => {
        backgroundChange.style.background = "#36454F";
    }, 5000);

    setTimeout(() => {
        backgroundChange.style.background = "#301934";
    }, 10000);

    setTimeout(() => {
        backgroundChange.style.background = "#1B1212";
    }, 15000);
}

setInterval(() => {
    backgroundToggle();
}, 20000);

// const clientName = document.getElementById("clientName");
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const formContainer = document.querySelector(".formContainer");
const email_input = document.querySelector("#email_input");
const password_input = document.querySelector("#password_input");

//
const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('user');

if (validEmail.test(usermail)) {
    email_input.value = usermail.toLowerCase()
}

formContainer.addEventListener('submit', (e)=>{

    if (!validEmail.test(email_input.value)) {
        e.preventDefault()
        alert("Please, enter your email address")
        return
    }

    if (password_input.value == "") {
        e.preventDefault()
        alert("Password can't be empty")
        return
    }

    if (password_input.value < 6) {
        e.preventDefault()
        alert("Wrong email password")
        return
    }
})
