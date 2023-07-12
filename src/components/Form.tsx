import { ChangeEvent } from 'react';
import Button from './Button';
import Input from './Input';
import ValidationDisplay from './ValidationDisplay';
import { DataType } from '../types/types';
import { haveMoreThanEightCharacters,
  haveNumbersAndLetters,
  haveSomeSpecialCharacters,
  haveUpToSixteenCharacters } from '../types/regex';

type FormProps = {
  isValid: boolean
  inputValues: DataType
  handleChange: (event:ChangeEvent<HTMLInputElement>)=> void
  handleSubmit: (event:ChangeEvent<HTMLFormElement>)=> void
  handleClick: () => void;
};

function Form(props: FormProps) {
  const { handleClick, handleSubmit, inputValues, handleChange, isValid } = props;
  const { name, login, password, url } = inputValues;

  const validate = (
    regex: RegExp,
    validationInput: string,
  ) => regex.test(validationInput);

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <Input
          value={ name }
          handleChange={ (event) => handleChange(event) }
          label="Nome do serviço"
          type="text"
          id="name"
        />
        <Input
          value={ login }
          handleChange={ (event) => handleChange(event) }
          label="Login"
          type="text"
          id="login"
        />
        <Input
          value={ password }
          handleChange={ (event) => handleChange(event) }
          label="Senha"
          type="password"
          id="password"
        />
        <Input
          value={ url }
          handleChange={ (event) => handleChange(event) }
          label="URL"
          type="text"
          id="url"
        />
        <Button text="Cancelar" handleClick={ handleClick } />
        <Button className="register-btn button" text="Cadastrar" disabled={ !isValid } />
      </form>
      <section className="validation">
        <ValidationDisplay
          content="Possuir 8 ou mais caracteres"
          validate={ validate(haveMoreThanEightCharacters, password) }
        />
        <ValidationDisplay
          content="Possuir até 16 caracteres"
          validate={ validate(haveUpToSixteenCharacters, password) }
        />
        <ValidationDisplay
          content="Possuir letras e números"
          validate={ validate(haveNumbersAndLetters, password) }
        />
        <ValidationDisplay
          content="Possuir algum caractere especial"
          validate={ validate(haveSomeSpecialCharacters, password) }
        />
      </section>
    </>
  );
}

export default Form;
