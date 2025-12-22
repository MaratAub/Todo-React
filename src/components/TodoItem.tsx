import {Task} from "./TodoList";

type TodoItemPropsType = {
  className: string
  id: string
  isDone: boolean
  title: string
  onDeleteTaskButtonClick: (id: Task['id']) => void
  onTaskCompleteChange: (id:Task['id'], isDone:Task['isDone']) => void;
}


export const TodoItem = ({className, isDone, id, title, onDeleteTaskButtonClick, onTaskCompleteChange }:TodoItemPropsType) => {


  return (
    <li className={`todo-item ${className}`}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={(event) => onTaskCompleteChange(id, event.target.checked)}
      />
      <label
        className="todo-item__label"
        htmlFor={id}
      >
        {title}
      </label>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => onDeleteTaskButtonClick(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
};

