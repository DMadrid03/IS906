"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hola Mundo');
let nombre = 'Juan';
// nombre = 123 //'Error
nombre = '123';
console.log(nombre);
let variableTipo = 'Juancito';
console.log(variableTipo);
let edad = 25;
console.log(typeof (edad));
const numeros = [1, 2, 3, 4, 5, 'Hola']; //!no tiene especificado el tipo de dato, acepta cualquiera
const numerosTipo = [1, 3, 4, 6];
console.log(typeof (numeros));
console.log(typeof (numerosTipo));
const suma = (a, b) => {
    return a + b;
}; //*obligamos con :number => a que la funcion devuelva un tipo específico
console.log(suma(2, 3));
const mascota = {
    nombre: 'Susy',
    edad: 5,
    // color: 'sldkjj'//!Error, ya que no existe esa propiedad en la interfaz
};
const mascota2 = {
    nombre: 'Apolo',
    edad: 4,
    raza: 'Terrier'
};
// console.log(mascota.raza)
// console.log(mascota2.raza)
//?UNION TYPES Y ENUM
var Contrato;
(function (Contrato) {
    Contrato[Contrato["INDEFNIDO"] = 1] = "INDEFNIDO";
    Contrato[Contrato["TEMPORAL"] = 2] = "TEMPORAL";
    Contrato[Contrato["POR_HORAS"] = 3] = "POR_HORAS";
    Contrato[Contrato["MEDIO_TIEMPO"] = 4] = "MEDIO_TIEMPO";
})(Contrato || (Contrato = {}));
const miFuncion = (nombre) => {
    return nombre + "Te saluda";
};
const daniel = {
    nombre: "Daniel",
    contrato: Contrato.POR_HORAS,
    // contrato:4 //!error porque 4 no está definido como
    salario: 1200,
    dni: "35135513513",
    saludo: miFuncion
};
// interface Empleado{
//     nombre:string
//     contrato: 1 | 2 | 3 //indefinido, temporal o por hora
//     salario: number
//     dni: string | number
// }
// const daniel:Empleado={
//     nombre: "Daniel",
//     contrato: 3,
//     // contrato:4 //!error porque 4 no está definido como
//     salario: 1200,
//     dni: "35135513513"
// }
const mac = {
    nombre: "sadlfkj",
    contrato: 1,
    // contrato:4 //!error porque 4 no está definido como
    salario: 1200,
    dni: 651,
    saludo: miFuncion
};
console.log(daniel);
//?como restringir a que solo acepte ciertos tipos de contrato?
//en la interfaz se usa union type contrato: Contrato.POR_HORAS | Contrato.INDEFINIDO
//*CLASES
class Persona {
    nombre;
    edad;
    //constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //métodos
    saludar() {
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`;
    }
}
const p = new Persona("Daniel", 31);
console.log(p.saludar());
//# sourceMappingURL=index.js.map