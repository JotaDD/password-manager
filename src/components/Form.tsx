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

const regexV = /^(?=.*[0-9])(?=.*[a-zA-Z)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

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
        validate={ validate(haveMoreThanEightCharacters, password) }
      >
        Possuir 8 ou mais caracteres
      </ValidationDisplay>
      <ValidationDisplay
        validate={ validate(haveUpToSixteenCharacters, password) }
      >
        Possuir até 16 caracteres
      </ValidationDisplay>
      <ValidationDisplay
        validate={ validate(haveNumbersAndLetters, password) }
      >
        Possuir letras e números
      </ValidationDisplay>
      <ValidationDisplay
        validate={ validate(haveSomeSpecialCharacters, password) }
      >
        Possuir algum caractere especial
      </ValidationDisplay>
      <Button text="Cadastrar" disabled={ !isValid } />
      <Button text="Cancelar" handleClick={ handleClick } />
    </>
  );
}

export default Form;
