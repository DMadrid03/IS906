import z from 'zod';
import { Todo } from '../interfaces/todo.interface';

export const todoSchema = z.object({
    title: z.string().min(1, { message: "El título es obligatorio" }),
    description: z.string(),
    completed: z.boolean().optional().default(false)

});

export const todoUpdateSchema = z.object({
    id: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    completed: z.boolean().optional().default(false)
});

export const validateTodoUpdate = (todo: Partial<Todo>) => {
    return todoUpdateSchema.safeParse(todo);
}
export const validateTodo = (todo: Partial<Todo>) => {
    return todoSchema.safeParse(todo);
}