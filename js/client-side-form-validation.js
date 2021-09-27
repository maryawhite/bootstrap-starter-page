var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();   //put this here, then write the function below
});

function checkInputs(){
    //get values from inputs
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    if(usernameValue === "") {  //check to see if they didn't enter a username
        //show error
        //add error class
        setErrorFor(username, "Username cannot be blank");   //create a function below for this
    } else {
        //add success class
        setSuccessFor(username);     //create a function for this
    }
    //you need to do this 4 times, bc there are 4 inputs
    if(emailValue === ""){
        setErrorFor(email, "email cannot be blank");  //create a function below to check the email address format
    } else if(!isEmail(emailValue)){
        setErrorFor(email, "email address is not valid")
    } else {
        setSuccessFor(email);
    }
    if(passwordValue === "") {
        setErrorFor(password, "please enter a password");
    } else {
        setSuccessFor(password);
    }

    if(password2Value === ""){
        setErrorFor(password2, "password2 cannot be blank");
    } else if(passwordValue !== password2Value){
        setErrorFor(password2, "passwords do not match");
    } else {
        setSuccessFor(password2);
    }
    //bonus show an alert if all fields are a success
    if(username.parentElement.className === "form-control success" && email.parentElement.className === "form-control success" && password.parentElement.className === "form-control success" && password2.parentElement.className === "form-control success"){
        alert("victory is mine");
    }
}

function setErrorFor(input, message){
    //we want to add the error class
    var formControl = input.parentElement;   //.form control
    var small = formControl.querySelector("small");

    //add error message inside small. We already have small tag in our html so this will change the text of that tag
    small.innerText = message;

    //add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input){
    var formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email){
    //find the regEX code from stack overflow to validate an email address. remember to include a / at the beginning and end and then .test(email)
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
