import { Request,Response,NextFunction } from "express";

export const errorHandler = (error:any, req:Request,res: Response,next:NextFunction )=>{
    //devolver un mensaje "genérico y controlado"
    res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
    });
}