import {TodoItem} from "./TodoItem";


type TodoListProps = {
  tasks: Task[]
}

type Task = {
  id: string;
  title: string;
  isDone: boolean;
}

export const TodoList = ({tasks}:TodoListProps) => {
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
                    id={t.id}
                    title={t.title}
                    isDone={t.isDone}
          />
        )
      })}
    </ul>
  )
};

