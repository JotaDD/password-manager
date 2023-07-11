type InputProps = {
  id: string;
  label: string;
  type: string;
};

function Input({ id, type, label, ...props }: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input id={ id } type={ type } { ...props } />
    </label>
  );
}
export default Input;
