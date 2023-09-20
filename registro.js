function verificarYRedirigir() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let año = document.getElementById("año").value;

    if (name && email && password && confirmPassword && dia && mes && año) {

        if (password === confirmPassword) {
            window.location.href = "index.html";
        } else {
            alert("Las contraseñas no coinciden.");
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

