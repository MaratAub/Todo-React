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

  const deleteAllTasks = () => {
    console.log('Удаляем все задачи')
  }

  const deleteTasks = (taskId) => {
    console.log(`Удаляем задачу c id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'Выполнена' : 'Не выполнена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log('New task')
  }

  return (

    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask}/>
      <SearchTaskForm onSearchInput={filterTasks} />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(task => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTasks}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  );
};

