const nameerror = document.getElementById("name-error");
const phoneerror = document.getElementById("phone-error");
const emailerror = document.getElementById("email-error");
const messageerror = document.getElementById("message");
const submiterror = document.getElementById("submit-error");
const btn = document.getElementById("btn");


// name 
function validateName() {
var name = document.getElementById("contact").value
if(name.length == 0) {
    nameerror.innerHTML = "Name is required!"
    nameerror.style.color ="red"
    return false;
}
if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameerror.innerHTML = "write full name"
    nameerror.style.color ="red"
    return false;
}
nameerror.innerHTML = "Correct";
nameerror.style.color="green"
return true;
}

// phone number 
function validatephone() {
    var phone = document.getElementById("phone").value
    if(phone.length == 0 ) {
        phoneerror.innerHTML = "phone nmuber is requried!"
        phoneerror.style.color ="red"
     return false;
    }
 if (!phone.match(/^\d{10}$/))  {
phoneerror.innerHTML = "please enter a 10 digit phone number!"
phoneerror.style.color ="red"
return false;
 }
 phoneerror.innerHTML ="vaild";
 phoneerror.style.color ="green"
 return true;
}

// email 

function validemail() {
    var email = document.getElementById("email").value

if(email.length == 0) {
    emailerror.innerHTML ="enter a email id"
    emailerror.style.color ="red"
    return false;

} if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailerror.innerHTML = "vaild"
    emailerror.style.color ="green"
    return true;
}
 else(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) 
    emailerror.innerHTML ="enter a vaild email"
    emailerror.style.color = "red";
    return false;
}
function validmessage() {
    var message = document.getElementById("message").value;

    if (message.length > 0) {  
        document.getElementById("message-error").innerHTML = "Correct"; 
        document.getElementById("message-error").style.color = "green";  
    } else {
        document.getElementById("message-error").innerHTML = "";  
    }
}


// sumbit button 

function validateform() {
   
    if (!validateName() || !validatephone() || !validemail()) {
        submiterror.style.display = "block";
        hidebutton();  
        submiterror.innerHTML = "Please enter your details correctly";
        setTimeout(function () {
            submiterror.style.display = "none";
        }, 3000);
        return false;
    } else {
        showbutton();  
        return true;  
    }
}

function hidebutton() {
    btn.style.display = "none";  
}

function showbutton() {
    btn.style.display = "block";  

}





