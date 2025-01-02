import { useCallback, useEffect } from "react";
import api from "./services/api";
import TodoList from "./components/TodoList";

export default function App() {
  const fetchApi = useCallback(async () => {
    await api.get("/");
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return <TodoList />;
}
