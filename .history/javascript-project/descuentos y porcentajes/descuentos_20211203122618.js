const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =
  precioOriginal - (precioOriginal * porcentajePrecioConDescuento) / 100;
