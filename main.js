const button = document.querySelector(".button");

button.addEventListener('click', function(e) {
    let firstName = document.querySelector(".firstName");
    let lastName = document.querySelector(".lastName");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");
    let emailValidation = validateEmail(email.value);
    let icon1 = document.querySelector(".icon-1");
    let icon2 = document.querySelector(".icon-2");
    let icon3 = document.querySelector(".icon-3");
    let icon4 = document.querySelector(".icon-4");

    e.preventDefault();
    if (firstName.value == "") {
        firstName.style.border = "1px solid red";
        firstName.placeholder = "";
        icon1.style.opacity = "100%";
    } else {
        firstName.style.border = "1px solid #e5e5e5";
        icon1.style.opacity = "0%";
    }

    if (lastName.value == "") {
        lastName.style.border = "1px solid red";
        lastName.placeholder = "";
        icon2.style.opacity = "100%";
    } else {
        lastName.style.border = "1px solid #e5e5e5";
        icon2.style.opacity = "0%";
    }

    if (emailValidation == false && email.value != "") {
        email.style.border = "1px solid red";
        email.placeholder = document.querySelector(".email");
        email.style.color = "red";
        icon3.style.opacity = "100%";
    } else if (email.value == "") {
        email.style.border = "1px solid red";
        email.placeholder = "";
        icon3.style.opacity = "100%";
    } else {
        email.style.border = "1px solid #e5e5e5";
        icon3.style.opacity = "0%";
        email.style.color = "black";
    }

    if (password.value == "") {
        password.style.border = "1px solid red";
        password.placeholder = "";
        icon4.style.opacity = "100%";
    } else {
        password.style.border = "1px solid #e5e5e5";
        icon4.style.opacity = "0%";
    }
});

function validateEmail(email) {
    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}