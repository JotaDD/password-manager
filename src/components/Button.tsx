type ButtonProps = {
  text: string;
  disabled?: boolean;
  handleClick?: () => void;
};
function Button({ text, disabled = false, handleClick = undefined }: ButtonProps) {
  return (
    <button
      onClick={ handleClick }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}
export default Button;
