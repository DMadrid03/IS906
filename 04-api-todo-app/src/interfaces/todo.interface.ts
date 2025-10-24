export interface Todo {
    id: string; //uuid
    title: string;
    description?: string | null; //opcional
    completed: boolean;

}