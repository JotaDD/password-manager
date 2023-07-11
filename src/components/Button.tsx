type ButtonProps = {
  text: string;
  handleClick?: () => void;
};
function Button({ text, handleClick = undefined, ...props }: ButtonProps) {
  return (
    <button onClick={ handleClick } { ...props }>
      { text }
    </button>
  );
}
export default Button;
