import { PrismaClient, Todo } from '@prisma/client';

const todoClient = new PrismaClient().todo;

export default class TodoService {
	async findAll(): Promise<Todo[]> {
		const todos = await todoClient.findMany();
		return todos;
	}

	async findTodoById(id: number): Promise<Todo | null> {
		const todo = await todoClient.findUnique({ where: { id } });
		return todo;
	}

	async addTodo(data: Todo): Promise<Todo> {
		const todo = await todoClient.create({ data });
		return todo;
	}

	async updateTodo(id: number, data: Todo): Promise<Todo> {
		const todo = await todoClient.update({ where: { id }, data });
		return todo;
	}

	async removeTodo(id: number): Promise<Todo> {
		const todo = await todoClient.delete({ where: { id } });
		return todo;
	}
}
