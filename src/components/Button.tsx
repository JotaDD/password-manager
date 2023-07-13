import './Button.css';

type ButtonProps = {
  dataTestId?: string
  text: string;
  disabled?: boolean;
  className?: string;
  handleClick?: (event:React.MouseEvent) => void
};

function Button({ text,
  disabled = false,
  handleClick = undefined,
  className = 'button',
  dataTestId = undefined,
}: ButtonProps) {
  return (
    <button
      data-testid={ dataTestId }
      className={ className }
      onClick={ handleClick }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}
export default Button;
