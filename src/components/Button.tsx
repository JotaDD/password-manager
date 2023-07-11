type ButtonProps = {
  text: string;

};
function Button({ text, ...props }: ButtonProps) {
  return (
    <button { ...props }>{ text }</button>
  );
}
export default Button;
