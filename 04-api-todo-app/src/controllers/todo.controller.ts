import { NextFunction, Request, Response } from 'express';
import * as TodoService from '../services/todo.service';
import { validate } from 'uuid';
import { validateTodo, validateTodoUpdate } from '../schemas/todo.schema';
//definir métodos que van a gestionar las rutas


export const getAll = async (req: Request, res: Response, next: NextFunction) => {

    try {
        //todo: traer las tareas desde la base de datos
        const todos = await TodoService.getAll();
        res.json(todos);
    } catch (error) {
        next(error); //pasando la responsabilidad de controlar el error al middleware de manejo de errores
        // res.status(500).json({ message: 'Internal server error' }); //!bastante genérico
    }
}

export const findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //todas las tareas
        const { id } = req.params; //todos los params son strings
        const todo = await TodoService.findByID(id);

        if (!todo) {
            return res.status(404).json({ message: `Tarea con id ${id} no encontrada` });
        }
        res.json(todo);
    } catch (error) {
        next(error);
    }
}

export const create = async (req: Request, res: Response, next: NextFunction) => {
    //crear una tarea
    try {

        //validar el body de la solicitud 
        const {success,error,data} = validateTodo(req.body);

        if (!success) {
            return res.status(400).json(error.issues);
        }    
        const newTodo = await TodoService.create(data);
        res.status(201).json(newTodo);
    } catch (error) {
        next(error);
    }
}

export const update = async (req: Request, res: Response) => {
    //actualizar una tarea
    
    const {success,error,data} = validateTodoUpdate(req.body);

    if(!success){
        return res.status(400).json(error.issues);
    }

    //sacar id de data
    const {id} = data;

    const updatedTodo = await TodoService.update(id, data);
    if(!updatedTodo){
        return res.status(404).json({message: `Tarea con id ${id} no encontrada`});
    }
    res.json(updatedTodo);

}

export const remove = async(req: Request, res: Response) =>{
    
    //eliminar una tarea
    const {id} = req.params;
    const deleted = await TodoService.remove(id);
    if(!deleted){
        return res.status(404).json({message: `Tarea con id ${id} no encontrada`});
    }
    res.status(204).send();
}

