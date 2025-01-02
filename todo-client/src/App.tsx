import { useCallback, useEffect } from "react";
import api from "./services/api";

export default function App() {
  const fetchApi = useCallback(async () => {
    await api.get("/");
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return <p>Todo Frontend</p>;
}
