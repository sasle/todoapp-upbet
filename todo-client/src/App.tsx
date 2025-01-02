import { useCallback, useEffect } from "react";
import api from "./services/api";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const fetchApi = useCallback(async () => {
    await api.get("/");
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
