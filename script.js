
const form = document.getElementById("form");
const username = document.getElementById("name");
const cep = document.getElementById("cep");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputPassword();
})

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigátoria.")
    }else if(passwordValue.lenght <6){
        errorInput(passord, "A senha precisa ter no mínimo 6 caracteres.")
        formItem.className = "form-content"
    }
}

function errorInput(input, message){


}