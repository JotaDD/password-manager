import Button from './Button';
import Input from './Input';

type FormProps = {
  handleClick: () => void;
};
function Form({ handleClick }: FormProps) {
  return (
    <>
      <form>
        <Input label="Nome do serviço" type="text" id="name" />
        <Input label="Login" type="text" id="login" />
        <Input label="Senha" type="password" id="password" />
        <Input label="URL" type="text" id="url" />
      </form>
      <Button text="Cadastrar" />
      <Button text="Cancelar" handleClick={ () => handleClick() } />
    </>
  );
}
export default Form;
