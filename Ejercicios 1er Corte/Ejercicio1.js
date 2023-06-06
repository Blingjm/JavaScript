const pesosEstudiantes = []

let mensaje = prompt(`
    Desea agregar los pesos de los estudiantes?
    1. Ingresa "si" para continuar
    2. Ingresa "no para terminar"
`)

let respuesta = mensaje.toLowerCase().trim()

//mientras el usuario quiera agg estudiantes se irá ejecutando
while (respuesta === 'si') {
    let pesoDelEstudiante = parseFloat(prompt("Ingresa el peso del estudiante: "))
    if (!isNaN(pesoDelEstudiante)) {
        pesosEstudiantes.push(pesoDelEstudiante)
    }

    let msj = prompt(`
        Desea agregar los pesos de los estudiantes?
        1. Ingresa "si" para continuar
        2. Ingresa "no para terminar"
    `)

    rta = msj.toLowerCase().trim()
    console.log(`Respuesta: ${respuesta}`);
    if (isNaN(respuesta) && respuesta === 'no') {
        break
    }
}

const listaPesosOrdenada = pesosEstudiantes.sort((peso1, peso2) => peso1 - peso2)
const estudianteMenorPeso = listaPesosOrdenada[0]
const estudianteMayorPeso = listaPesosOrdenada[pesosEstudiantes.length - 1]
const pesosMenores40Kg = pesosEstudiantes.filter(peso => peso < 40)
const pesosEntre40_50Kg = pesosEstudiantes.filter(peso => (peso >= 40) && (peso <=50))
const pesosEntre50_60Kg = pesosEstudiantes.filter(peso => (peso > 50) && (peso < 60))
const pesosMayores60Kg = pesosEstudiantes.filter(peso => peso >= 60)

console.log(`El estudiante de menor peso es: ${estudianteMenorPeso}`);
console.log(`El estudiante de mayor peso es: ${estudianteMayorPeso}`);
console.log(`Los estudiantes de peso menor a 40Kg  son: ${pesosMenores40Kg}`);
console.log(`Los estudiantes de peso entre 40 y 50kg son: ${pesosEntre40_50Kg}`);
console.log(`Los estudiantes de peso mayores a 60kg son: ${pesosMayores60Kg}`);