import { Router } from 'express';
import TodoController from '../controllers/todo.controller';
import protectRoute from '../middlewares/protect-route.middleware';
import { checkIfTodoExist } from '../middlewares/todo.middleware';
import { validateCreateTodo, validateUpdateTodo } from '../validations/todo.validation';

const router = Router();

router.post('/todo', protectRoute, validateCreateTodo, TodoController.createTodo);
router.get('/todo/:id', protectRoute, checkIfTodoExist, TodoController.getSingleTodo);
router.get('/todos', protectRoute, TodoController.getAllTodos);
router.get('/search', protectRoute, TodoController.searchTodoItem);
router.patch('/todo/:id', protectRoute, checkIfTodoExist, validateUpdateTodo, TodoController.updateTodo);
router.delete('/todo/:id', protectRoute, checkIfTodoExist, TodoController.deleteSingleTodo);
router.delete('/todos', protectRoute, TodoController.deleteAllTodos);

export default router;
