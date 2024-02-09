//Constructor para crear la pila
class Stack {
    constructor() {
        this.items = []; // Inicializa un array para almacenar los elementos del stack
    }

    // Método para agregar un elemento al stack
    push(element) {
        this.items.push(element);
    }

    // Método para remover y devolver el elemento en la cima del stack
    pop() {
        if (this.isEmpty()) {
            return "El stack está vacío";
        }
        return this.items.pop();
    }

    // Método para devolver el elemento en la cima del stack sin removerlo
    peek() {
        if (this.isEmpty()) {
            return "El stack está vacío";
        }
        return this.items[this.items.length - 1];
    }

    // Método para verificar si el stack está vacío
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para obtener el tamaño del stack
    size() {
        return this.items.length;
    }

    // Método para vaciar el stack
    clear() {
        this.items = [];
    }

    // Método para imprimir los elementos del stack
    print() {
        console.log(this.items.toString());
    }
}

//Creé la pila
const DataBase = new Stack();
console.log(DataBase.isEmpty());

//Las materias que se asignarán de manera aleatória
const materiasDeCoding = ["HTML", "CSS", "JavaScript"]
const materiasDeEconomia = ["Cálculo", "Estadística", "Econometría", "Finanzas"]
const materiasDeMusica = ["Teoría musical", "Técnica de instrumento", "Ensamble"]
const asignaturas = [materiasDeCoding, materiasDeEconomia, materiasDeMusica]

// Generar un número aleatorio entre 0 y 2 (la longitud de la lista de opciones)
const indiceAleatorio = Math.floor(Math.random() * asignaturas.length)

//La clase para crear alumnos y añadirlos a la DataBase
class Alumno {
    constructor(nombre, apellidos, edad, materias, calificaciones, DataBase) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = materias;
        this.calificaciones = calificaciones;
    }

    //Función para asignarle sus materias de manera aleatoria
    subjects () {
        this.materias = asignaturas[indiceAleatorio];
        } 
    //Función para asignarle sus calificaciones

    //Función para añadir a la pila
    joinToDataBase () {
        DataBase.push(this);
    }
}

//Creé los primeros alumnos
let alumno1 = new Alumno ("Ángel", "Canché", 22)
let alumno2 = new Alumno ("Abraham", "Cajún", 22)

//Mando a llamar a la función que añadé a los alumnos a la base de datos
alumno1.joinToDataBase();
console.log(DataBase.peek());

alumno2.joinToDataBase();
console.log(DataBase.peek());

let alumno3 = new Alumno ("Joselito", "Wisconsin", 19)
alumno3.joinToDataBase();
console.log(DataBase.peek());

DataBase.clear();
console.log(DataBase.isEmpty);

//Testeando
alumno1.subjects();
alumno1.joinToDataBase();
console.log(DataBase.peek());