function calcularBhaskara(ax2, bx, c) {
    const delta = Math.pow(bx, 2) - 4 * ax2 * c;
  
    if (delta < 0) {
      return "Delta é negativo";
    } else {
      const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
      const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);
      return [x1, x2];
    }
  }
  
  console.log(calcularBhaskara(3, -5, 12));