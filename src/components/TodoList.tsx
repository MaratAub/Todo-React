import {TodoItem} from "./TodoItem";


type TodoListProps = {
  tasks: Task[]
  onDeleteTaskButtonClick: (id:Task['id']) => void;
  onTaskCompleteChange: (id:Task['id'], isDone:Task['isDone']) => void;
}

export type Task = {
  id: string;
  title: string;
  isDone: boolean;
}

export const TodoList = ({tasks, onDeleteTaskButtonClick, onTaskCompleteChange}:TodoListProps) => {
  const hasTasks = true

  if (!hasTasks) {
    return (
      <div className="todo__empty-message"></div>
    )
  }

  return (
    <ul className="todo__list">

      {tasks.map((t) => {
        return (
          <TodoItem className='todo__item'
                    key={t.id}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                    id={t.id}
                    title={t.title}
                    isDone={t.isDone}
          />
        )
      })}
    </ul>
  )
};

