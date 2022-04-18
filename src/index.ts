let botonDelFormulario=document.getElementById("enviar");
let nombreUsuario = document.getElementById("nombreU");
function ingresandoNombre(): void {
  let nombre = nombreUsuario.value;
  if ((nombre!=="" )&& (nombre.length>=3 && nombre.length<=20)) {
    console.log("es un nombre válido" + nombre);
    
  } else {
    console.log("el campo nombre no debe ser vacio y tiene que tener entre 3 y 20 carácteres"); 
  
  }
  
}


nombreUsuario?.addEventListener("input", ingresandoNombre);
botonDelFormulario?.addEventListener("click",ingresandoNombre);
let apellidoUsuario = document.getElementById("apellido");

function ingresandoApellido(): void {
  let apellido = apellidoUsuario.value;

  if ((apellido!=="")&& (apellido.length>=3 && apellido.length<=20)) {
    console.log("es un apellido válido" + apellido);
    
  } else {
    console.log("el campo apellido no debe ser vacio y tiene que tener entre 3 y 20 carácteres"); 
  
  }
  
  
  
 
}

apellidoUsuario?.addEventListener("input", ingresandoApellido);

let emailUsuario = document.getElementById("mail");

function ingresandoEmail(): void {
  let email = emailUsuario.value;
  console.log(email);
  let emailU:any[]=[];
  for (let index = 0; index < emailU.length; index++) {
    const element = array[index];
    
  }
}

emailUsuario?.addEventListener("input", ingresandoEmail);

let consultaUsuario = document.getElementById("consulta");

function consultaDeUsuario() {
  let usuarioConsulta = consultaUsuario.value;
  console.log(usuarioConsulta);
}

consultaUsuario?.addEventListener("input", consultaDeUsuario);



