import './Input.css'

type InputProps = {
  type: string, 
  name?: string, 
  className?: string,
  placeholder?: string, 
  value?: string,
  accept?: string,
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, name, className, placeholder, value, accept, handler }: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
      accept={accept}
      onChange={handler}
    />
  );
};

export default Input;