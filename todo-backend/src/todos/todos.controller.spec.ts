import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { PrismaService } from '../../prisma/prisma.service';
import { Todo } from '@prisma/client';

describe('TodosController', () => {
  let controller: TodosController;
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService, PrismaService],
    }).compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getTodos', () => {
    it('should return an array of todos', async () => {
      const result: Todo[] = [
        {
          id: 1,
          title: 'Test Todo',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'getTodos').mockResolvedValue(result);

      expect(await controller.getTodos()).toBe(result);
    });
  });

  describe('createTodo', () => {
    it('should create and return a todo', async () => {
      const result: Todo = {
        id: 1,
        title: 'Test Todo',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'createTodo').mockResolvedValue(result);

      expect(await controller.createTodo('Test Todo')).toBe(result);
    });
  });

  describe('updateTodo', () => {
    it('should update and return a todo', async () => {
      const result: Todo = {
        id: 1,
        title: 'Updated Todo',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'updateTodo').mockResolvedValue(result);

      expect(
        await controller.updateTodo('1', {
          title: 'Updated Todo',
          completed: true,
        }),
      ).toBe(result);
    });
  });

  describe('deleteTodo', () => {
    it('should delete and return a todo', async () => {
      const result: Todo = {
        id: 1,
        title: 'Test Todo',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'deleteTodo').mockResolvedValue(result);

      expect(await controller.deleteTodo('1')).toBe(result);
    });
  });
});
