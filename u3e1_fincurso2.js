// Ejercicio: Cuenta atrás para Nochevieja 🎆
// Escribe un programa que calcule cuántos días faltan desde hoy hasta el 31 de diciembre del año actual.

let hoy = new Date()
let anioActual = hoy.getFullYear()
let nochevieja = new Date (anioActual, 11, 31)

let diasFaltantes = nochevieja - hoy

let milisegundosPorDia = (1000 * 60 * 60 * 24)

let diasRestantes = Math.ceil(diasFaltantes / milisegundosPorDia)

document.write('Faltan ', diasRestantes, ' para noche vieja.')

