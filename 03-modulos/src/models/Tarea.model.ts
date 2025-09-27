import { Prioridad, Tarea } from "../Interfaces/Tarea.interface";


export class TareaModel implements Tarea {

    //?Las propiedades de la clase, de forma abreviada, para referenciar directamente las variables
    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public completada: boolean = false,
        public prioridad: Prioridad = Prioridad.Media
    ){

    }

    marcarCompletada(): void {
        this.completada = true;
    }
}



