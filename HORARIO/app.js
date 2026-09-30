const contenedorEtiquetasHora = document.getElementById('timeLabels')
const contenedorLineasGuia = document.getElementById('gridLines')
const capaEventos = document.getElementById('eventsLayer')

const HORA_INICIO = 8
const HORA_FIN = 15
const PIXELES_POR_MINUTO = 1;

const franjasHorarias = [
  { titulo: "1ª", inicio: "08:30", fin: "09:20", tipo: "clase" },
  { titulo: "2ª", inicio: "09:25", fin: "10:15", tipo: "clase" },
  { titulo: "Patio", inicio: "10:15", fin: "10:35", tipo: "patio" },
  { titulo: "3ª", inicio: "10:35", fin: "11:25", tipo: "clase" },
  { titulo: "4ª", inicio: "11:30", fin: "12:20", tipo: "clase" },
  { titulo: "Patio", inicio: "12:20", fin: "12:35", tipo: "patio" },
  { titulo: "5ª", inicio: "12:35", fin: "13:25", tipo: "clase" },
  { titulo: "6ª", inicio: "13:30", fin: "14:20", tipo: "clase" }
]

function convertirHorasAMinutos() {
  const partes = textoHora.split(":");
  const horas = Number(partes[0]);
  const minutos = Number(partes[1]);

  return (horas * 60) + minutos;
}

function dibujarCuadricula() {
  contenedorEtiquetasHora.innerHTML = ""
  contenedorLineasGuia.innerHTML = ""

  for (let hora = HORA_INICIO; hora < HORA_FIN; hora++) {
    const etiqueta = document.createElement("div")
    etiqueta.classList.add("time-slot-label")
    etiqueta.textContent = String(hora).padStart(2, "0") + ':00'
    contenedorEtiquetasHora.appendChild(etiqueta)

    const linea = document.createElement('div')
    linea.classList.add('grid-line')
    contenedorLineasGuia.appendChild(linea)
  }
}

function dibujarBloques() {
  capaEventos.innerHTML = ''
  const minutosBase = HORA_INICIO * 60;

  franjasHorarias.forEach(franja => {
    const minutosInicio = convertirHorasAMinutos(franja.inicio)
    const minutosFin = convertirHorasAMinutos(franja.fin)

    const posicionSuperior = (minutosInicio - minutosBase) * PIXELES_POR_MINUTO;

    // Altura del bloque: duración exacta en minutos
    const duracion = minutosFin - minutosInicio;
    const alturaBloque = duracion * PIXELES_POR_MINUTO;

    // Creamos el elemento tarjeta
    const bloque = document.createElement("div");
    bloque.classList.add("time-block", franja.tipo);

    // Asignamos su posición y altura con CSS en línea
    bloque.style.top = `${posicionSuperior}px`;
    bloque.style.height = `${alturaBloque}px`;

    // Contenido visible dentro de la tarjeta
    bloque.innerHTML = `
      <span class="block-title">${franja.titulo}</span>
      <span class="block-time">${franja.inicio} - ${franja.fin} (${duracion} min)</span>
    `;

    capaEventos.appendChild(bloque);
  })
}

dibujarCuadricula()
dibujarBloques();