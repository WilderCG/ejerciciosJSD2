let hoy = new Date()

let hora = hoy.getHours()
let minutos = hoy.getMinutes()
let segundos = hoy.getSeconds()

let opcionUsuario = Number(prompt("Elige una opcion: " + "\n" + "1. Formato 12 horas" + "\n" + "2. Formato 24 horas"))

if (opcionUsuario == 2) {
  document.write(hora + ":" + minutos + ":" + segundos + "<br>")

} else if (opcionUsuario == 1) {

  let periodo = (hora >= 12) ? " PM" : " AM"

  let hora12 = hora
  if (hora12 === 0) {
    hora12 = 12;
  } else if (hora12 > 12){
    hora12 = hora12 - 12
  } 
  document.write(hora12 + ":" + minutos + ":" + segundos + periodo + "<br>")
} 

