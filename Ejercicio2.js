let enero = parseFloat(prompt("Ingresa monto para el mes de enero: "));
const ingresosMensuales = 250 * 11;

if (isNaN(enero)) {
    console.log('No se puede realizar ningún ya que el mes de enero no es un numero');
} else {
    let calculoAnual = (enero + ingresosMensuales) * 0.85
    console.log(calculoAnual + ' Bs en intereses');
}