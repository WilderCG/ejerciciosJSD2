let hoy = new Date()
let opcionUsuario = Number(prompt("Ingresa el formato que prefieres: \n 1. 17/02/2016 \n 2. Miércoles, 17 de febrero de 2016. \n 3. Wednesday, February 17, 2016."))

let dia = hoy.getDate()
let mes = (hoy.getMonth() + 1)
let anio = hoy.getFullYear()

if (opcionUsuario === 1) {
  document.write(dia + "/" + mes + "/" + anio)
} else if (opcionUsuario === 2) {

  let formatoEspaniol = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: "numeric"
  }

  let fechaLarga = hoy.toLocaleDateString('es-ES', formatoEspaniol)
  document.write(fechaLarga)

} else {
    
  let formatoIngles = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: "numeric"
  }

  let fechaLargaIngles = hoy.toLocaleDateString('en-US', formatoIngles)
  document.write(fechaLargaIngles)
}
