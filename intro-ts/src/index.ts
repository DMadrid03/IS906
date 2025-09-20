console.log('Hola Mundo')

let nombre = 'Juan'
// nombre = 123 //'Error
nombre = '123'
console.log(nombre)

let variableTipo: string = 'Juancito'
console.log(variableTipo)


let edad: number = 25
console.log(typeof(edad))

const numeros = [1,2,3,4,5,'Hola'] //!no tiene especificado el tipo de dato, acepta cualquiera

const numerosTipo: number[] = [1,3,4,6]

console.log(typeof(numeros))
console.log(typeof(numerosTipo))

const suma = (a:number,b:number):number =>{ //!obliga a que se les defina tipo a (a,b)
    return a+b
}//*obligamos con :number => a que la funcion devuelva un tipo específico

console.log(suma(2,3))
// console.log(suma(2,'3')) //!muestra error


//?Interfaces

interface Mascota{
    nombre: string
    edad: number
    raza ? : string //*Propiedad opcional
}

const mascota:Mascota = {
    nombre: 'Susy',
    edad: 5,
    // color: 'sldkjj'//!Error, ya que no existe esa propiedad en la interfaz
}
const mascota2: Mascota={
    nombre: 'Apolo',
    edad :4,
    raza: 'Terrier'
}
// console.log(mascota.raza)
// console.log(mascota2.raza)


//?UNION TYPES Y ENUM

enum Contrato{
    INDEFNIDO=1,
    TEMPORAL=2,
    POR_HORAS = 3, //? o bien sin los iguales y comenzará desde 0
    MEDIO_TIEMPO = 4
}

interface Empleado{
    nombre:string
    contrato: Contrato
    salario: number
    dni: string | number
    saludo (nombre: string): string 
}
const miFuncion = (nombre: string): string=>{
        return nombre + "Te saluda";
    }

const daniel:Empleado={
    nombre: "Daniel",
    contrato: Contrato.POR_HORAS,
    // contrato:4 //!error porque 4 no está definido como
    salario: 1200,
    dni: "35135513513",
    saludo: miFuncion
}

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


const mac:Empleado={
    nombre: "sadlfkj",
    contrato: 1,
    // contrato:4 //!error porque 4 no está definido como
    salario: 1200,
    dni: 651,
    saludo: miFuncion
}
console.log(daniel)

//?como restringir a que solo acepte ciertos tipos de contrato?
//en la interfaz se usa union type contrato: Contrato.POR_HORAS | Contrato.INDEFINIDO


//*CLASES
class Persona{
    //constructor
    constructor (public nombre: string, private edad: number){}


    //métodos
    saludar(): string{
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const p = new Persona("Daniel",31)

console.log(p.saludar())