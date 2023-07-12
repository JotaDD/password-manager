import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import ValidationDisplay from './ValidationDisplay';

type FormProps = {
  handleClick: () => void;
};

// const atLeastOneNumber = '0-9';
// const atLeastOneLetter = 'a-zA-Z';
// const atLeastSpecialCharacter = '!@#$%^&*';
// const limit = `[${atLeastOneLetter}${atLeastOneNumber}${atLeastSpecialCharacter}]{8,16}`;

const validateNonEmptyRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

const regexV = /^(?=.*\d)(?=.*[a-zA-Z)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

const haveMoreThanEightCharacters = /^.{8,}$/;
const haveUpToSixteenCharacters = /^.{0,16}$/;
const haveNumbersAndLetters = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
const haveSomeSpecialCharacters = /^.*[!@#$%^&*(),.?":{}|<>].*$/;

function Form({ handleClick }: FormProps) {
  const initialState = {
    name: '',
    login: '',
    password: '',
    url: '',
  };
  const [isValid, setIsValid] = useState(false);
  const [inputValues, setInputValues] = useState(initialState);
  const { name, login, password, url } = inputValues;

  const checkIfIsNotEmpty = (inputList: object): boolean => {
    return Object.values(inputList).every((input) => input.length > 0);
  };

  const validate = (
    regex: RegExp,
    validationInput: string,
  ) => regex.test(validationInput);

  const checkIfIsAllValid = () => {
    if (
      checkIfIsNotEmpty((inputValues))
      && validateNonEmptyRegex.test(password)
      && password.match(regexV)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setInputValues(
      {
        ...inputValues,
        [id]: value,
      },
    );
    checkIfIsAllValid();
  };

  return (
    <>
      <form>
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
      </form>
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
      <Button text="Cancelar" handleClick={ handleClick } />
      <Button className="register-btn button" text="Cadastrar" disabled={ !isValid } />
    </>
  );
}

export default Form;
