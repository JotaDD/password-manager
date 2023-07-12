type ValidationDisplayProps = {
  children: React.ReactNode;
  validate: boolean;
};
function ValidationDisplay({ children, validate }: ValidationDisplayProps) {
  return (
    <p
      className={ validate
        ? 'valid-password-check'
        : 'invalid-password-check' }
    >
      { children }
    </p>
  );
}
export default ValidationDisplay;
