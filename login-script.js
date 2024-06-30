const form     = document.getElementById("form");
const email    = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();
})

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatório.")
    }else{
        const formItem         = email.parentElement;
            formItem.className = "Form-content"
    }
}

function checkInputPassword(){
    const passwordValue    = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatória.")
    }else if(passwordValue.lenght < 6){
    }else{
        const formItem     = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputEmail();
    checkInputPassword();

    const formItems = form.querySelectorAll(".form-content")

    const isValid   = [...formItems].every( (item) =>{
        return item.className === "form-content"
    });

    if(isValid){
        alert("LOGIN CONCLUÍDO")
    }

function errorInput(input, messsage){
    const formItem        = input.parentElement;
    const textMessage     = formItem.querySelector("span");

    textMessage.innerText = message;

    formItem.className    = "form-content error"
}
}