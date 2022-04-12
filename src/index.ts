let nombreUsuario = document.getElementById("nombreU");
function ingresandoNombre(): void {
  let nombre = nombreUsuario.value;
  console.log(nombre);
}

nombreUsuario?.addEventListener("input", ingresandoNombre);

let apellidoUsuario = document.getElementById("apellido");

function ingresandoApellido(): void {
  let apellido = apellidoUsuario.value;
  console.log(apellido);
}

apellidoUsuario?.addEventListener("input", ingresandoApellido);

let emailUsuario = document.getElementById("mail");

function ingresandoEmail(): void {
  let email = emailUsuario.value;
  console.log(email);
}

emailUsuario?.addEventListener("input", ingresandoEmail);

let consultaUsuario = document.getElementById("consulta");

function consultaDeUsuario() {
  let usuarioConsulta = consultaUsuario.value;
  console.log(usuarioConsulta);
}

consultaUsuario?.addEventListener("input", consultaDeUsuario);

let formulario = document.getElementById("usuario");
function enviarFormulario() {
  let datosDelUsuario = formulario.value;
  console.log(datosDelUsuario);
}
formulario?.addEventListener("form", enviarFormulario);

let botonEnviar = document.getElementById("enviar");
function enviar(): void {}

botonEnviar?.addEventListener("click", enviar);
