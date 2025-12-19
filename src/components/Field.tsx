
type FieldPropsType = {
  className: string
  id: string
  label: string
  type?: string
}

export const Field = ({className, id, type, label}: FieldPropsType) => {
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
      />
    </div>
  );
};

