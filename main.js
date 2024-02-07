class Alumno {
    constructor(nombre, apellidos, edad, materias, calificaciones) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = materias;
        this.calificaciones = calificaciones;
    }
}

const materiasDeCoding = ["HTML", "CSS", "JavaScript"]
const materiasDeEconomia = ["Cálculo", "Estadística", "Econometría", "Finanzas"]

let alumno1 = new Alumno ("Ángel", "Canché", 22)
let alumno2 = new Alumno ("Abraham", "Cajún", 22)

console.log(alumno1);
console.log(alumno2);