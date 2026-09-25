let respuesta = prompt("Introduce tu edad: ");
let edad = Number(respuesta);

if ( isNaN(edad) || edad < 0) {
  document.write("Error con la edad, intenta nuevamente")
} else if (edad < 13) {
  document.write("Niño")
} else if (edad <= 26) {
  document.write("Joven")
} else if (edad <= 60) {
    document.write("Adulto")
} else {
  document.write("Jubilado")
}