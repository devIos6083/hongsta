import TodoEditor from "@/components/components/todo-editor";
import TodoItem from "@/components/components/todo-item";
import { useTodos } from "@/store/todos";

export default function TodoListPage() {
  const todos = useTodos();

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">TodoList</h1>
      <TodoEditor id={0} content={""} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
