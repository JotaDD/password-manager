import Button from './Button';
import Input from './Input';

function Form() {
  return (
    <form>
      <Input label="Nome do serviço" type="text" id="name" />
      <Input label="Login" type="text" id="login" />
      <Input label="Senha" type="password" id="password" />
      <Input label="URL" type="text" id="url" />
      <Button text="Cadastrar" />
      <Button text="Cancelar" />
    </form>
  );
}
export default Form;
