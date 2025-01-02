import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";
import { Todo } from "../types/todo";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await api.get<Todo[]>("/todos");
  return response.data;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (newTodo: { title: string }) => {
    const response = await api.post<Todo>("/todos", newTodo);
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (update: { id: number; completed: boolean }) => {
    const response = await api.patch<Todo>(`/todos/${update.id}`, {
      completed: update.completed,
    });
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    await api.delete(`/todos/${id}`);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        return state.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
