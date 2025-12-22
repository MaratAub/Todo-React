import {Field} from "./Field";

type SearchTaskFormPropsType = {
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchTaskForm = ({onSearchInput}:SearchTaskFormPropsType) => {
  return (
    <form className="todo__form"
          onSubmit={(e) => e.preventDefault()}
      >
      <Field className='todo__field'
             id='search-task'
             label='Search task'
             type='search'
             onInput={(e) => onSearchInput(e.target.value)}
      />
    </form>
  );
};

