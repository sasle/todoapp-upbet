import { useState, useEffect } from "react";
import api from "../../services/api";
import { Todo } from "../../types/todo";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const response = await api.get<Todo[]>("/todos");
    setTodos(response.data);
  }

  async function createTodo() {
    await api.post("/todos", { title: newTodo });
    setNewTodo("");
    fetchTodos();
  }

  async function updateTodo(id: number, data: Partial<Todo>) {
    await api.patch(`/todos/${id}`, data);
    fetchTodos();
  }

  async function deleteTodo(id: number) {
    await api.delete(`/todos/${id}`);
    fetchTodos();
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={createTodo}>Create Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo(todo.id, { completed: e.target.checked })
              }
            />
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}