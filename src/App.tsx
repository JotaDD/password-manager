import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';
import Card from './components/Card';
import { DataType, DataTypeWithId } from './types/types';
import { regexV, validateNonEmptyRegex } from './types/regex';

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
      {
        passwordList.length > 0
          ? <Card passwordList={ passwordList } />
          : <span>nenhuma senha cadastrada</span>
      }
    </div>
  );
}

export default App;
