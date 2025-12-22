import {Field} from "./Field";
import {Button} from "./Button";


type AddTaskFormPropsType = {
  addTask: () => void
}

export const AddTaskForm = ({addTask}:AddTaskFormPropsType) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addTask();
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className='todo__field'
        label={`New task title`}
        id='new-task'
        type={'text'}
        onInput={() => {}}
      />
      <Button type="submit" children='Add'/>
    </form>
  );
};

