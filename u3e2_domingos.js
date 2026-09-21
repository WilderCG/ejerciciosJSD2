let hoy = new Date()
let anioActual = hoy.getFullYear()


let dia = Number(prompt("Introduce el dia de tu cumpleaños: "))
let mes = Number(prompt("Introduce el mes de tu cumpleaños (1-12): "))

for(let anio = anioActual; anio <= 2100; anio++){
  let fechaCumple = new Date(anio, (mes - 1), dia)

  if (fechaCumple.getDay() === 0) {
    document.write(anio + "<br>");
  }
}





