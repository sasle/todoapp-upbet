import { useState, useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../store/todoSlice";

export default function TodoList() {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTodo({ title: newTodo }));
    setNewTodo("");
  };

  return (
    <div className="todo-list-container">
      <h1>TODO List</h1>
      <form onSubmit={handleCreateTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Create Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                dispatch(
                  updateTodo({ id: todo.id, completed: e.target.checked })
                )
              }
            />
            <span className="todo-title">{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
