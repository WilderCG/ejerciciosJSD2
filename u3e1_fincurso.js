const hoy = new Date();
const anioActual = hoy.getFullYear();

// En JavaScript los meses van de 0 (enero) a 11 (diciembre). Junio es 5.
let finCurso = new Date(anioActual, 5, 24);

// Si la fecha actual ya pasó el 24 de junio de este año, se calcula para el próximo
if (hoy > finCurso) {
  finCurso.setFullYear(anioActual + 1);
}

// Diferencia en milisegundos convertida a días
const milisegundosPorDia = 1000 * 60 * 60 * 24;
const diasRestantes = Math.ceil((finCurso - hoy) / milisegundosPorDia);

console.log(`Quedan ${diasRestantes} días hasta el fin de curso.`);