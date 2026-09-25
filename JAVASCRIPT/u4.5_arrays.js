// Ejercicio 1
document.write("Ejercicio 1: " + "<br>")
let paises = ["España", "Francia", "Portugal", "Italia"]

function mostrarTotalElementos() {
  document.write("Número de paises: " + paises.length + "<br>")
}

mostrarTotalElementos()

// Ejercicio 2
document.write("<br>")
document.write("Ejercicio 2: " + "<br>")

function mostrarListadoDelArray() {
  document.write(paises.join(", ") + "<br>")
}

mostrarListadoDelArray()

// Ejercicio 3
document.write("<br>")
document.write("Ejercicio 3: " + "<br>")

function mostrarInverso() {
  document.write(paises.reverse() + "<br>")
}

function mostrarInverso2() {
  
  for (let i = 0; i < paises.length; i++) {
    document.write("Pais " + i + ": " + paises[i] + "<br>")
  }
  
}

mostrarInverso()
mostrarInverso2()

// Ejercicio 4
document.write("<br>")
document.write("Ejercicio 4: " + "<br>")

