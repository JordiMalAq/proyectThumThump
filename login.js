function entrar() {
    let nombreUsuario = document.getElementById("name").value;
    let contraseña = document.getElementById("password").value;

    
    let nombreUsuarioRegistrado = localStorage.getItem("nombreUsuario");
    let contraseñaRegistrada = localStorage.getItem("contraseña");

    if (nombreUsuario === nombreUsuarioRegistrado && contraseña === contraseñaRegistrada) {
        window.location.href = "index.html";
        alert("Inicio de sesión exitoso.");
        
    } else {
        alert("Datos incorrectos.");
    }
}
