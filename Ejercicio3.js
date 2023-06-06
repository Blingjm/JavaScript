let cantidadEstudiantes = prompt("Ingresa cantidad de estudiantes: ");
const dataset = []

const ingresarEstudiantes = (() => {
  let nombre = prompt("Ingresa primer nombre: ")
  let CI = prompt("Ingresa cedula: ")
  let notaFisica = parseFloat(prompt("Ingresa nota de Fisica: "))
  let notaMate = parseFloat(prompt("Ingresa nota de mate: "))
  let notaProgramacion = parseFloat(prompt("Ingresa nota de Programacion: "))

  const data = {
    nombreEstudiante: nombre,
    Cedula: CI,
    materias: [
      {
        nombreMateria: 'Fisica',
        nota: notaFisica
      },
      {
        nombreMateria: 'Matematica',
        nota: notaMate
      },
      {
        nombreMateria: 'Programacion',
        nota: notaProgramacion
      },
    ]
  }

  return data;

})

//el objeto se inyecta en el array vacio de estudiantes
for (let index = 0; index < cantidadEstudiantes; index++) {
  dataset.push(ingresarEstudiantes())
}

//Nota Promedio de cada materia
for (let index = 0; index < 3; index++) {
  let promCadaMateria = dataset.map(estudiante => estudiante.materias[index].nota)
    .reduce((nota, acumulador = 0) => acumulador += nota)

  let nombreMateria = dataset.map((estudiante) => estudiante.materias[index].nombreMateria)
  console.log(`El promedio de ${nombreMateria[0]} es de: ${promCadaMateria / dataset.length} pts`);
}

//Nota maxima por materia
for (let index = 0; index < 3; index++) {
  let notaMaximaPorMateria = dataset.map(estudiante => estudiante.materias[index].nota)
    .sort((a, b) => {
      return a - b
    }).slice(-1)

  let nombreMateria = dataset.map((estudiante) => estudiante.materias[index].nombreMateria)
  console.log(`Las nota maxima de ${nombreMateria[0]} ${notaMaximaPorMateria}`);
}

//Obtener la cantidad de materias aprobadas de cada estudiante
const materiasAprobadas = dataset.map(estudiante => {
  return estudiante.materias.filter((materia) => materia.nota >= 10).length
})

const nombreEstudiante = dataset.map(estudiante => estudiante.nombreEstudiante)
for (let index = 0; index < dataset.length; index++) {
  console.log(`El estudiante ${nombreEstudiante[index]} aprobó ${materiasAprobadas[index]} materias`);
}

//Acceder al array de materias y extraer la longitud de cada subarray
//Dependiendo de la longitud de cada subarray será la cantidad de materias aprobadas
const ningunaMateriaAprobada = materiasAprobadas.filter(materia => materia === 0)
const unaMateriaAprobada = materiasAprobadas.filter(materia => materia === 1)
const dosMateriasAprobadas = materiasAprobadas.filter(materia => materia === 2)
const todasMateriasAprobadas = materiasAprobadas.filter((materia) => materia === 3)

console.log('Alumnos quienes reprobaron todas las materia: ', ningunaMateriaAprobada.length);
console.log('Alumnos quienes aprobaron una materia: ', unaMateriaAprobada.length);
console.log('Alumnos quienes aprobaron dos materia: ', dosMateriasAprobadas.length);
console.log('Alumnos quienes aprobaron todas las materias: ', todasMateriasAprobadas.length);