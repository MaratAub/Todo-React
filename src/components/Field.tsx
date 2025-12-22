
type FieldPropsType = {
  className: string
  id: string
  label: string
  type?: string
  onInput:(e) => void
}

export const Field = ({className, id, type, label, onInput}: FieldPropsType) => {
  return (
    <div className={`field ${className}`}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        onInput={onInput}
      />
    </div>
  );
};

