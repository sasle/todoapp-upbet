import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
