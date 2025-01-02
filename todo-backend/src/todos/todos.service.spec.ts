import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { PrismaService } from '../../prisma/prisma.service';
import { Todo } from '@prisma/client';

describe('TodosService', () => {
  let service: TodosService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService, PrismaService],
    }).compile();

    service = module.get<TodosService>(TodosService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
      jest.spyOn(prisma.todo, 'findMany').mockResolvedValue(result);

      expect(await service.getTodos()).toBe(result);
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
      jest.spyOn(prisma.todo, 'create').mockResolvedValue(result);

      expect(await service.createTodo('Test Todo')).toBe(result);
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
      jest.spyOn(prisma.todo, 'update').mockResolvedValue(result);

      expect(
        await service.updateTodo(1, { title: 'Updated Todo', completed: true }),
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
      jest.spyOn(prisma.todo, 'delete').mockResolvedValue(result);

      expect(await service.deleteTodo(1)).toBe(result);
    });
  });
});
