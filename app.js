const inputMail = document.forms["Input_email"]["email_address"]
const alertText = document.querySelector("#alert")

const regEx = /(@gmail.com)$/

alertOn = () => {
    inputMail.style.border = "2px solid rgb(255, 66, 66)"
    alertText.textContent = "Check your email please!";
    setTimeout(() => {alertText.style.opacity = 1;}, 30);
}
alertOff = () => {
    inputMail.style.border = null
    alertText.style.opacity = 0;
    setTimeout(() => {alertText.textContent = "";}, 200);
}

document.forms["Input_email"].noValidate = true

inputMail.addEventListener("input", () => {
    if (regEx.test(inputMail.value) == true) {
        alertOff()    
    } else {
        alertOn()
    }
})

