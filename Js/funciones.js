function validarEnviar(){
    let arroba=document.formulario.Email.value.indexOf("@");
    let expReg= /.com/;
    
    if((document.formulario.Nombre.value.length>=20)||(document.formulario.Nombre.value.length==0)){
        alert("Ingrese un nombre válido");
        document.formulario.Nombre.focus();
    }

    else if (arroba==-1){
        alert("Este campo debe contener \"@\"");
        document.campos.Email.focus();
    }

    else if (!(expReg.test(document.formulario.Email.value.slice(arroba)))){
        alert("Ingrese una direccion de correo válida");
        document.campos.Email.focus();
    }

    else if (document.formulario.Mensaje.value.length==0){
        alert("Ingrese un mensaje antes de enviar el formulario");
        document.campos.Mensaje.focus();
    }
    return 0;
}