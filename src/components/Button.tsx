import './Button.css';

type ButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
  handleClick?: () => void;
};

function Button({ text,
  disabled = false,
  handleClick = undefined,
  className = 'button' }: ButtonProps) {
  return (
    <button
      className={ className }
      onClick={ handleClick }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}
export default Button;
