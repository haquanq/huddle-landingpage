const mail_input = document.querySelector("#email_input")
const sub_btn = document.querySelector("#sub_btn")
const alertText = document.querySelector("#alert")

const regEx = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/

alertOn = () => {
    mail_input.style.border = "2px solid rgb(255, 66, 66)"
    setTimeout(() => {mail_input.style.border = "2px solid transparent"}, 300);       
    const alert = setInterval(() => {
        mail_input.style.border = "2px solid rgb(255, 66, 66)"
        setTimeout(() => {mail_input.style.border = "2px solid transparent"}, 300);                
    }, 600);
    setTimeout(() => { clearInterval(alert) }, 1200);
    alertText.textContent = "Check your email please!";
    setTimeout(() => {alertText.style.opacity = 1;}, 30);
}

alertOff = () => {
    alertText.style.opacity = 0;
    setTimeout(() => {alertText.textContent = "";}, 200);
}



sub_btn.addEventListener("click", () => {
    if (regEx.test(mail_input.value) == true) {
        mail_input.value = "";
        mail_input.blur()    
        mail_input.placeholder = "Succeed!"
        alertOff()    
    } else {
        alertOn()
        mail_input.blur()
    }
})
