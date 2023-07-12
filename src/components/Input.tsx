import { ChangeEvent } from 'react';

type InputProps = {
  id: string;
  label: string;
  type: string;
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>)=> void
};

function Input({ id, type, label, value, handleChange, ...props }: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        value={ value }
        onChange={ handleChange }
        id={ id }
        type={ type }
        { ...props }
      />
    </label>
  );
}
export default Input;
