import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import { tryCatchMiddleware } from '../../middleware/tryCatch.middleware';
import { isExistMiddleware } from '../../middleware/isExist.middleware';
import { PrismaClient } from '@prisma/client';
import { validatorMiddleware } from '@/middleware/validator.middleware';
import { todoSchema } from '../../validation/todo.validation';
const todosRouter: Router = Router();
const todoClient = new PrismaClient().todo;

todosRouter.get(
	'/all',
	tryCatchMiddleware(todoController.getAllTodo.bind(todoController)),
);

todosRouter.get(
	'/:id',
	isExistMiddleware(todoClient),
	tryCatchMiddleware(todoController.getTodoById.bind(todoController)),
);

todosRouter.post(
	'/add',
	validatorMiddleware(todoSchema),
	tryCatchMiddleware(todoController.addTodo.bind(todoController)),
);

todosRouter.patch(
	'/:id/update',
	validatorMiddleware(todoSchema),
	tryCatchMiddleware(todoController.updateTodo.bind(todoController)),
);

todosRouter.delete(
	'/:id',
	isExistMiddleware(todoClient),
	tryCatchMiddleware(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
