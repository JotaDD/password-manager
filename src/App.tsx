import Swal from 'sweetalert2';
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
    Swal.fire({
      icon: 'success',
      text: 'Serviço cadastrado com sucesso',
      timer: 1500,
    });
  };

  const checkIfIsNotEmpty = (inputList: object): boolean => Object.values(inputList)
    .every((input) => (input.length > 0));

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
