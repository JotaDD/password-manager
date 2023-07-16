import { ChangeEvent, useState } from 'react';
import './Form.css';
import Button from './Button';
import Input from './Input';
import ValidationDisplay from './ValidationDisplay';
import { DataType } from '../types/types';
import {
  haveMoreThanEightCharacters,
  haveNumbersAndLetters,
  haveSomeSpecialCharacters,
  haveUpToSixteenCharacters,
} from '../types/regex';

type FormProps = {
  isValid: boolean;
  inputValues: DataType;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
  handleClick: () => void;
};

function Form(props: FormProps) {
  const { handleClick, handleSubmit, inputValues, handleChange, isValid } = props;
  const { name, login, password, url } = inputValues;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handlePassword = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const validate = (
    regex: RegExp,
    validationInput: string,
  ) => regex.test(validationInput);

  return (
    <div className="form-container">
      <section className="form">
        <form id="form" onSubmit={ handleSubmit }>
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
          <div className="password-container">
            <Input
              maxLength={ 18 }
              value={ password }
              handleChange={ (event) => handleChange(event) }
              label="Senha"
              type={ !showPassword ? 'password' : 'text' }
              id="password"
            />
            <Button
              className="hide-eye"
              dataTestId="show-hide-form-password"
              showPassword={ showPassword }
              text=""
              handleClick={ (event) => handlePassword(event) }
            />
          </div>
          <Input
            value={ url }
            handleChange={ (event) => handleChange(event) }
            label="URL"
            type="text"
            id="url"
          />
        </form>
        <section className="form-button">
          <Button
            form="form"
            className="register-btn button bigger-btn"
            text="Cadastrar"
            disabled={ !isValid }
          />
          <Button text="Cancelar" handleClick={ handleClick } />
        </section>
      </section>
      <section className="validation">
        <ValidationDisplay
          content="Possuir 8 ou mais caracteres"
          validate={ validate(haveMoreThanEightCharacters, password) }
        />
        <ValidationDisplay
          content="Possuir letras e números"
          validate={ validate(haveNumbersAndLetters, password) }
        />
        <ValidationDisplay
          content="Possuir algum caractere especial"
          validate={ validate(haveSomeSpecialCharacters, password) }
        />
        <ValidationDisplay
          content="Possuir até 16 caracteres"
          validate={ validate(haveUpToSixteenCharacters, password) }
        />
      </section>
    </div>
  );
}

export default Form;
