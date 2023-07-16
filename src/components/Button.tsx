import './Button.css';
import PasswordIcon from './PasswordIcon';

type ButtonProps = {
  dataTestId?: string;
  text: string;
  showPassword?: boolean;
  disabled?: boolean;
  className?: string;
  form?: string;
  handleClick?: (click: React.MouseEvent) => void;
};

function Button({ text,
  form = '',
  disabled = false,
  handleClick = undefined,
  className = 'button',
  dataTestId = undefined,
  showPassword = false,
}: ButtonProps) {
  return (
    <button
      form={ form }
      data-testid={ dataTestId }
      className={ className }
      onClick={ handleClick }
      disabled={ disabled }
    >
      { text.length === 0 ? <PasswordIcon showPassword={ showPassword } /> : text }
    </button>

  );
}
export default Button;
