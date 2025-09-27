import { Prioridad, Tarea } from "../Interfaces/Tarea.interface";
import { TareaModel } from "../models/Tarea.model";

export class GestionTareas{
    private tareas: Tarea[] = [];
    private siguienteId: number = 1;

    agregarTarea(titulo:string, descripcion:string, prioridad:Prioridad): Tarea {
        const nuevaTarea = new TareaModel(
            this.siguienteId++, //!this.siguienteId = this.siguienteId + 1
            titulo, 
            descripcion, 
            false, 
            prioridad);
        this.tareas.push(nuevaTarea);        
        return nuevaTarea;        
    }

    obtenerTodasLasTareas(completada: boolean | null = null): Tarea[] {
        if(completada ===null) return this.tareas;

        return this.tareas.filter(tarea => tarea.completada === completada);
    }

    eliminarTarea(id: number): boolean {

        const indice = this.tareas.findIndex(tarea => tarea.id === id);
        if(indice === -1){
            return false; //tarea no encontrada
        }

        this.tareas.splice(indice,1)
        return true;
    }

    /*
        entonces se le puede enviar un objeto algo así
        {
            titulo: 'Nuevo titulo',
            descripcion: 'Nueva descripcion'
        }
    // */
    //?Usando Partial para que se reciban propiedades opcionales
    modificarTarea(id:number,cambios: Partial<Tarea>): Boolean { //recibir una parte de la tarea a modificar
        
        const tarea = this.tareas.find(tarea => tarea.id === id);

        //si trae el id y completado para que no se actualice
        delete cambios?.id;
        delete cambios?.completada;

        if(tarea){

            Object.assign(tarea,cambios); //asignar los cambios a la tarea encontrada
            return true;     
        }

        
        return false;
    }

    // modificarTarea(id:number,data:Pick<Tarea,'titulo' | 'descripcion' | 'prioridad'>): Tarea | null { //recibir una parte de la tarea a modificar
        
    //     const tarea = this.tareas.find(tarea => tarea.id === id);
    //     return null;
    // }
    // modificarTarea(id:number,data:Omit<Tarea,'id' | 'completado' >): Tarea | null { //recibir una parte de la tarea a modificar
        

        
    // }


    cambiarEstadoTarea(id:number, completada: boolean): Boolean {
        
        const tarea = this.tareas.find((tarea)=> tarea.id ===id)
        if(tarea)
        {
            tarea.completada = completada;
            return true;
        }
        return true
    }

}