import { ChangeEvent } from 'react';
import './Input.css';

type InputProps = {
  className?: string;
  id: string;
  label: string;
  type: string;
  value?: string;
  checked?: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  id,
  type,
  label,
  value = undefined,
  checked = undefined,
  handleChange,
  className = '',
  ...props
}: InputProps) {
  return (
    <label htmlFor={ id }>
      { label }
      <input
        className={ className }
        value={ value }
        checked={ checked }
        onChange={ handleChange }
        id={ id }
        type={ type }
        { ...props }
      />
    </label>
  );
}
export default Input;
