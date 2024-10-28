$(document).ready(function(){
    $("#registroForm").submit(function(event){
        
        event.preventDefault();

        
        var rut = $("#rut").val();
        var nombre = $("#nombre").val();
        var apellidoPaterno = $("#apellidoPaterno").val();
        var apellidoMaterno = $("#apellidoMaterno").val();
        var edad = $("#edad").val();
        var genero = $("input[name='inlineRadioOptions']:checked").val(); 
        var celular = $("#celular").val();
        var casa = $("#casa").val();
        var email = $("#email").val();
        var contraseña = $("#contraseña").val();
        var rcontraseña = $("#rcontraseña").val();

        
        if(rut.length < 9 || rut.length > 10){
            alert("El Rut debe tener entre 9 y 10 caracteres.");
            return;
        }

        
        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20 ||
            apellidoMaterno.length < 3 || apellidoMaterno.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        
        if(edad < 18 ){
            alert("No puedes registrarte si eres menor de 18")
            return;
        }

        
        if(genero === undefined){
            alert("Por favor, seleccione un Género.");
            return;
        }

        
        if(casa === ""){
            alert("Por favor, ingrese un valor en el campo 'Casa'.");
            return;
        }

        
        var Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!Email.test(email)) {
            alert("Por favor, ingrese un email válido.");
            return;
        }

        
        var Contraseña = /^(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*_]{10,}$/;
        if(!Contraseña.test(contraseña)) {
            alert("La contraseña debe tener al menos 10 caracteres, un número, un carácter especial y una letra mayúscula.");
            return;
        }

        
        if(contraseña !== rcontraseña) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        var Celular = /^\d{9,12}$/;
        if(!Celular.test(celular)) {
            alert("Por favor, ingrese un teléfono válido con un formato de 9 a 12 dígitos.");
            return;
        }

        // Si todas las// Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método


        //CODIGO COPIADO DE LA ACTIVIDAD HECHA EN CLASES Y MODIFICADO A GUSTO
        //A exepcion del la validacion de la contraseña y el email, la cual me llevó horas de investigacion realizarla
        
    });
});
