let hoy = new Date()
let anioActual = hoy.getFullYear()

for (let anio = anioActual; anio <= 2050; anio++) {
  let viernesTrece = new Date(anio, 9, 13)
  if (viernesTrece.getDay() === 5) {
    document.write(anio + "<br>")
  }
}