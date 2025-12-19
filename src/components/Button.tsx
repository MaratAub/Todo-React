type FieldPropsType = {
  className?: string
  type?: "submit" | "reset" | "button"
  children?: React.ReactNode
}

export const Button = ({className, type, children}:FieldPropsType) => {
  return (
    <button className={`button ${className}`} type={type}>{children}</button>
  );
};

