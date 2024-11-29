import { Response, Request } from 'express';
import TodoService from '@/services/todo.service';

export class TodoController {
	constructor(private todoService: TodoService) {}

	async getAllTodo(_: Request, res: Response): Promise<void> {
		// TODO: Write your implementation here
		const todos = await this.todoService.findAll();
		res.json({ todos });
	}

	async getTodoById(req: Request, res: Response): Promise<void> {
		const todo = await this.todoService.findTodoById(Number(req.params.id));
		res.json({ todo });
	}

	async addTodo(req: Request, res: Response): Promise<void> {
		const data = req.body;
		const todo = await this.todoService.addTodo(data);
		res.json({ message: 'Todo added successfully', todo });
	}

	async updateTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const data = req.body;
		const todo = await this.todoService.updateTodo(id, data);
		res.json({ message: 'Todo updated successfully', todo });
	}

	async deleteTodo(req: Request, res: Response): Promise<void> {
		const id = parseInt(req.params.id);
		const todo = await this.todoService.removeTodo(id);
		res.json({ message: 'Todo deleted successfully', todo });
	}
}

const todoController = new TodoController(new TodoService());
export default todoController;
