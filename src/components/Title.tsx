import './Title.css';

type TitleProps = {
  children: React.ReactNode;
};
function Title({ children }: TitleProps) {
  return (
    <header>
      <h1>{ children }</h1>
    </header>
  );
}
export default Title;
