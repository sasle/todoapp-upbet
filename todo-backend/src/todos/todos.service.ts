import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async createTodo(title: string): Promise<Todo> {
    return this.prisma.todo.create({
      data: { title },
    });
  }

  async updateTodo(id: number, data: Partial<Todo>): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data,
    });
  }

  async deleteTodo(id: number): Promise<Todo> {
    return this.prisma.todo.delete({
      where: { id },
    });
  }
}
