//"base de datos"

import { title } from "process";
import { Todo } from "../interfaces/todo.interface";
// import {v4 as uuid} from 'uuid';
import {randomUUID as uuid} from 'node:crypto'; //desde node 14.17.0


//todo: conectar a la base de datos (vamos a usar prisma también )

const todos: Todo[] = [];

//el servicio no neccesita el req, res
export const getAll = async() =>{
    return todos;
}
export const findByID = async (id:string) => 
    todos.find(todo => todo.id ===id)

export const create = async (todo: Partial <Todo>):Promise<Todo> => {
    const newTodo = {
        id: uuid(),
        title: todo.title!,
        description: todo.description || null,
        completed: !!todo.completed //una doble negación convierte a booleano a falso
    }
    

    //llamar al método de la base de datos
    //ahorita que devuelva un promise no es obligatorio porque no hay nada asíncrono
    todos.push(newTodo);
    return newTodo;
}


