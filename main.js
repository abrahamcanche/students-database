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

//Creé los primeros alumno
let alumno1 = new Alumno ("Ángel", "Canché", 22, materiasDeCoding)
let alumno2 = new Alumno ("Abraham", "Cajún", 22, materiasDeEconomia)

//Creé la pila con ayuda de Chat GPT
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

let DataBase = new Stack();
console.log(DataBase.isEmpty());

//Añado el primer elemento a la pila
DataBase.push(alumno1);
console.log(DataBase.size());
console.log(DataBase.peek());

//Añado el segundo elemento a la pila
DataBase.push(alumno2);
console.log(DataBase.peek());

//Elimino el último elemento de la pila
DataBase.pop();
console.log(DataBase.peek());