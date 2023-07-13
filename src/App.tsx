import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';
import Card from './components/Card';
import { DataType, DataTypeWithId } from './types/types';
import { regexV, validateNonEmptyRegex } from './types/regex';
import Input from './components/Input';

const initialState = {
  name: '',
  login: '',
  password: '',
  url: '',
};
// const testArray = [{
//   id: '1',
//   name: 'Objeto 1',
//   login: 'login1',
//   password: 'password1',
//   url: 'https://example.com/1',
// },
// {
//   id: '2',
//   name: 'Objeto 2',
//   login: 'login2',
//   password: 'password2',
//   url: 'https://example.com/2',
// },
// {
//   id: '3',
//   name: 'Objeto 3',
//   login: 'login3',
//   password: 'password3',
//   url: 'https://example.com/3',
// },
// ];

function App() {
  const [registerListener, setRegisterListener] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordList, setPasswordList] = useState<DataTypeWithId[]>([]);
  const [inputValues, setInputValues] = useState<DataType>(initialState);
  const [hidePassword, setHidePassword] = useState<boolean>(false);
  const { password } = inputValues;

  const handleClick = () => {
    setRegisterListener(!registerListener);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordList([
      ...passwordList,
      {
        ...inputValues,
        id: uuid(),
      }]);
    setRegisterListener(false);
    setInputValues(initialState);
  };

  const checkIfIsNotEmpty = (inputList: object): boolean => {
    const teste = Object.values(inputList).every((input) => {
      return (input.length > 0);
    });
    return teste;
  };

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement >) => {
    const { value, id } = event.target;

    setInputValues(
      {
        ...inputValues,
        [id]: value,
      },
    );
    checkIfIsAllValid();
  };
  const handlePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleDelete = (itemId:string) => {
    setPasswordList(passwordList.filter(({ id }) => id !== itemId));
  };

  return (
    <div>
      <Title>
        Gerenciador de senhas
      </Title>
      {
        registerListener
          ? <Form
              isValid={ isValid }
              inputValues={ inputValues }
              handleChange={ (event) => handleChange(event) }
              handleSubmit={ (event) => handleSubmit(event) }
              handleClick={ handleClick }
          />
          : <Button
              className="register-btn bigger-btn button"
              text="Cadastrar Nova Senha"
              handleClick={ handleClick }
          />
      }
      <Input
        id="hidePassword"
        label="Esconder senhas"
        type="checkbox"
        checked={ hidePassword }
        handleChange={ handlePassword }
      />
      {
        passwordList.length > 0
          ? <Card
              handleDelete={ handleDelete }
              hidePassword={ hidePassword }
              passwordList={ passwordList }
          />
          : <p>nenhuma senha cadastrada</p>
      }
    </div>
  );
}

export default App;
