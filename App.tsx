import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import CounterPage from "./pages/counter-page";
import TodoListPage from "@/pages/todo-list-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />

      <Route element={<AuthLayout />}></Route>
    </Routes>
  );
}

export default App;
