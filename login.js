function entrar() {
    let nombreUsuario = document.getElementById("name").value;
    let contraseña = document.getElementById("password").value;

    if (nombreUsuario && contraseña) {
        window.location.href = "index.html";
    } else {
        alert("Por favor, completa los campos Nombre de usuario y Contraseña.");
    }
}
