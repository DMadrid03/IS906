//patron mvc

import {Prioridad} from './Interfaces/Tarea.interface';
import {TareaModel} from './models/Tarea.model';
import {GestionTareas} from './services/GestionTareas';


const gestionTareas = new GestionTareas();

console.log('============OBTENIENDO TODAS LAS TAREAS============');
console.log(gestionTareas.obtenerTodasLasTareas());

console.log('============AGREGANDO TAREAS============');
gestionTareas.agregarTarea('Creando mi primer tarea','Creando mi primer TO-Do',Prioridad.Alta)
//hacer mas tareas
gestionTareas.agregarTarea('Creando mi segunda tarea','Creando mi segundo TO-Do',Prioridad.Baja)
gestionTareas.agregarTarea('Creando mi tercera tarea','Creando mi tercer TO-Do',Prioridad.Media)
console.log('============OBTENIENDO TODAS LAS TAREAS============');
console.log(gestionTareas.obtenerTodasLasTareas());
console.log('============ELIMINANDO TAREA CON ID 2============');
gestionTareas.eliminarTarea(2);
console.log('============OBTENIENDO TODAS LAS TAREAS============');
console.log(gestionTareas.obtenerTodasLasTareas());

console.log('============MODIFICANDO TAREA CON ID 1============');
gestionTareas.modificarTarea(1,{titulo:'Tarea modificada',descripcion:'nueva descripción de la tarea1', prioridad: Prioridad.Baja});
console.log('============OBTENIENDO TODAS LAS TAREAS============');
console.log(gestionTareas.obtenerTodasLasTareas());

console.log("============COMPLETANDO PRIMERA TAREA==============")
gestionTareas.cambiarEstadoTarea(1,true);


//crear mas tareas completadas
gestionTareas.agregarTarea('Creando mi cuarta tarea','Creando mi cuarto TO-Do',Prioridad.Baja)
gestionTareas.cambiarEstadoTarea(3,true);
gestionTareas.agregarTarea('Creando mi quinta tarea','Creando mi quinto TO-Do',Prioridad.Media)
gestionTareas.agregarTarea('Creando mi sexta tarea','Creando mi sexto TO-Do',Prioridad.Alta)
gestionTareas.cambiarEstadoTarea(4,false);
console.log('============OBTENIENDO TODAS LAS TAREAS============');
console.log(gestionTareas.obtenerTodasLasTareas());


console.log('============OBTENIENDO TAREAS COMPLETADAS============');
console.log(gestionTareas.obtenerTodasLasTareas(true));

gestionTareas.cambiarEstadoTarea(5,false)
console.log('============OBTENIENDO TAREAS PENDIENTES============');
console.log(gestionTareas.obtenerTodasLasTareas(false));
//instancia de un TODO Class
/*
    {
        id: number;
        title: string;
        description: string;
        completed: boolean;
    }
*/


//agregar tarea
//listar tareas
//actualizar tarea (marcar como completada o pendiente)

//borrar tarea