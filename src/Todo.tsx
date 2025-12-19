import {AddTaskForm} from "./components/AddTaskForm";
import {SearchTaskForm} from "./components/SearchTaskForm";
import {TodoInfo} from "./components/TodoInfo";
import {TodoList} from "./components/TodoList";

export const Todo = () => {
  const tasks = [
    {
      id: 'tasks-1',
      title: 'Купить молоко',
      isDone: false
    },
    {
      id: 'tasks-2',
      title: 'Купить хлеб',
      isDone: true
    }
  ]


  return (

    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo total={tasks.length} done={tasks.filter(task => task.isDone).length} />
      <TodoList tasks={tasks} />
    </div>
  );
};

