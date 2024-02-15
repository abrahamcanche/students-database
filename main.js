//Linked List
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }

    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }

    pop() {
      if (!this.top) {
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      poppedNode.next = null;
      this.size--;
      return poppedNode.data;
    }

    peek() {
      return this.top ? this.top.data : null;
    }

    isEmpty() {
      return this.size === 0;
    }

    getSize() {
      return this.size;
    }

    clear() {
    this.top = null;
    this.size = 0;
    }

    print() {
    let current = this.top;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    }
}

//Creé la pila
const DataBase = new Stack();

//Las materias
const materiasDeCoding = ["HTML", "CSS", "JavaScript"]
const materiasDeEconomia = ["Estadística", "Desarrollo Regional", "Finanzas"]
const materiasDeMusica = ["Teoría musical", "Técnica de instrumento", "Ensamble"]
const asignaturas = [materiasDeCoding, materiasDeEconomia, materiasDeMusica]
const indiceAleatorio = Math.floor(Math.random() * asignaturas.length)

//Las posibles calificaciones
const posiblesCalificaciones = [5, 6, 7, 8, 9, 10]
const indiceAleatorio2 =Math.floor(Math.random() * posiblesCalificaciones.length)
const indiceAleatorio3 =Math.floor(Math.random() * posiblesCalificaciones.length)
const indiceAleatorio4 =Math.floor(Math.random() * posiblesCalificaciones.length)

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
    subjects() {
        this.materias = asignaturas[indiceAleatorio];
        }

    //Función para asignarle sus calificaciones
    grades() {
        this.calificaciones = [posiblesCalificaciones[indiceAleatorio2], posiblesCalificaciones[indiceAleatorio3], posiblesCalificaciones[indiceAleatorio4]];
    }

        //Función para añadir a la pila
    joinToDataBase() {
        DataBase.push(this);
    }
}

let alumno1 = new Alumno ("Ángel", "Canché", 22)
let alumno2 = new Alumno ("Abraham", "Cajún", 22)
let alumno3 = new Alumno ("Joselito", "Wisconsin", 19)

//Imprimir en pantalla la información del alumno recién creado
const zonaDeImpresion1 = document.getElementById("lastname");
const zonaDeImpresion2 = document.getElementById("name");
const zonaDeImpresion3 = document.getElementById("age");

function noHide() {
  const div = document.getElementById("credencial-y-boleta");
  div.style.display = "block";
}

function next() {
  const info = DataBase.peek();

  zonaDeImpresion1.innerHTML = `${info.apellidos}`;
  zonaDeImpresion2.innerHTML = `${info.nombre}`;
  zonaDeImpresion3.innerHTML = `${info.edad} años`;
}

//Imprimir tabla de calificaciones en pantalla
const materia1 = document.getElementById("materia1");
const calificacion1 = document.getElementById("calificacion1");
const materia2 = document.getElementById("materia2");
const calificacion2 = document.getElementById("calificacion2");
const materia3 = document.getElementById("materia3");
const calificacion3 = document.getElementById("calificacion3");

function mostrarCalificaciones() {
  const info = DataBase.peek();

  materia1.innerHTML = `${info.materias[0]}`;
  materia2.innerHTML = `${info.materias[1]}`;
  materia3.innerHTML = `${info.materias[2]}`;
  calificacion1.innerHTML = `${info.calificaciones[0]}`;
  calificacion2.innerHTML = `${info.calificaciones[1]}`;
  calificacion3.innerHTML = `${info.calificaciones[2]}`;
}

//Crear alumno y asignarle materias y calificaciones
function inscribir() {
  const nameInput = document.getElementById("floatingInputName").value;
  const lastnameInput = document.getElementById("floatingInputLastname").value;
  const ageInput = document.getElementById("floatingInputAge").value;

  const newAlumno = new Alumno (nameInput, lastnameInput, ageInput);
  newAlumno.subjects();
  newAlumno.grades();
  DataBase.push(newAlumno);

  next();
  noHide();
  mostrarCalificaciones();
}