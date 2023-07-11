import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [registerListener, setRegisterListener] = useState(false);

  const handleClick = () => {
    setRegisterListener(!registerListener);
  };

  return (
    <div>
      <Title>
        Gerenciador de senhas
      </Title>
      {
        registerListener
          ? <Form handleClick={ handleClick } />
          : <Button text="Cadastrar Nova Senha" handleClick={ handleClick } />
      }
    </div>
  );
}

export default App;
