let respuestaUsuario = prompt("¿Cuál fue el primer presidente de la democracia española?")

while (respuestaUsuario !== "Adolfo Suarez") {
  if(respuestaUsuario == "Suarez") {
  respuestaUsuario = prompt("Te falta el Nombre. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?")
  } else if (respuestaUsuario == "Adolfo") {
        respuestaUsuario = prompt("Te falta el apellido. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?")
  } else {
    respuestaUsuario = prompt("ERROR. Inténtelo de nuevo. ¿Cuál fue el primer presidente de la democracia española?")
  }
}

alert("Apellido correcto, fin del programa.")