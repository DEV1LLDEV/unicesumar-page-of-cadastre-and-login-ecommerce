$(document).ready(function() {
    $("#opcao-novo-usuario").click(function() {
        $("#login-form").hide();
        $("#novo-usuario-form").show();
    });

    $("#opcao-login").click(function() {
        $("#novo-usuario-form").hide();
        $("#login-form").show();
    });

    // Verificação de campos preenchidos (exemplo)
    $("#cadastrar").click(function() {
        const nome = $("#nome-completo").val();
        const cep = $("#cep").val();
        const email = $("#email").val();
        const senha = $("#senha").val();

        if (nome && cep && email && senha) {
            // Enviar dados para o servidor (AJAX ou outra abordagem)
            console.log("Cadastro realizado com sucesso!");
        } else {
            alert("Preencha todos os campos obrigatórios.");
        }
    });
});
