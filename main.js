 function verificarContraseñas() {
 
    const clave1 = document.getElementById('clave1');
    const clave2 = document.getElementById('clave2');
 
    if (clave1.value != clave2.value) {
 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        document.getElementById("error").classList.remove("mostrar");
        document.getElementById("ok").classList.remove("ocultar");
        document.getElementById("login").disabled = true;
        
        return true;
    }
 
}