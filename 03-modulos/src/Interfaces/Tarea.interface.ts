export enum Prioridad {
    Baja,
    Media,
    Alta
}
export interface Tarea{
    id: number
    titulo: string
    descripcion: string
    completada: boolean
    prioridad: Prioridad
}



