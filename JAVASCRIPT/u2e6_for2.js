for (let hora = 9; hora <= 21; hora++) {
    for (let min = 0; min <= 55; min += 5) {
      let formatoMin = (min < 10) ? ":0" + min : ":" + min
      console.log(hora + formatoMin);
    }
}