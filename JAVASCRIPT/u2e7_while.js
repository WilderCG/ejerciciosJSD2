let respuestaUsuario = prompt("Escribe el apellido del primer presidente de la democracia")


while (respuestaUsuario !== "Suarez") {
  alert("Apellido equivocado, intenta nuevamente")
  respuestaUsuario = prompt("Escribe el apellido del primer presidente de la democracia")
}

alert("Apellido correcto, fin del programa.")