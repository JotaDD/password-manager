type ValidationDisplayProps = {
  content: string;
  validate: boolean;
};
function ValidationDisplay({ content, validate }: ValidationDisplayProps) {
  return (
    <p
      className={ validate
        ? 'valid-password-check'
        : 'invalid-password-check' }
    >
      { content }
    </p>
  );
}
export default ValidationDisplay;
