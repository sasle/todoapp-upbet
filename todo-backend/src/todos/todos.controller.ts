import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '@prisma/client';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  async getTodos(): Promise<Todo[]> {
    return this.todosService.getTodos();
  }

  @Post()
  async createTodo(@Body('title') title: string): Promise<Todo> {
    return this.todosService.createTodo(title);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Todo>,
  ): Promise<Todo> {
    return this.todosService.updateTodo(id, data);
  }

  @Delete(':id')
  async deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.deleteTodo(id);
  }
}
