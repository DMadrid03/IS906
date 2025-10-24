
import{Router} from 'express';
import {getAll, findById, create, update} from '../controllers/todo.controller';
//o bien esa línea como
//!import * as todoController from '../controllers/todo.controller'; //pero sería no óptimo si no se usan todos los métodos
//?y luego usar todoController.getAll, etc.

// /todos/...


const router = Router();

router.get('/', getAll);
router.get('/:id', findById);
router.post('/', create);
router.put('/:id', update);


export default router;