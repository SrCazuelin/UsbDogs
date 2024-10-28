$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault();
    
        var email = $("#email").val();
        var contraseña = $("#contraseña").val();

        var Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!Email.test(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        var Contraseña = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,}$/;
        if(!Contraseña.test(contraseña)) {
            alert("Contraseña incorrecta");
            return;
        }

        if(email === "ADMIN@ADMIN.com" && contraseña === "ADMIN") {
            window.location.href = "ADMIN.html";
        } else {
            alert("Usuario inexistente");
        }
        
    });

});