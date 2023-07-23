import { BiSolidLock } from 'react-icons/bi';
import { AiOutlineLink } from 'react-icons/ai';
import { DataTypeWithId } from '../types/types';
import Button from './Button';
import './Card.css';

type CardProps = {
  handleDelete: (itemId: string) => void;
  hidePassword?: boolean;
  passwordList: DataTypeWithId[];
};

function Card({ passwordList, handleDelete, hidePassword = false }: CardProps) {
  return (
    <div className="card-container">
      {
        passwordList
          .map((item: DataTypeWithId) => {
            return (
              <div className="card" key={ item.id }>
                <h4>
                  <BiSolidLock className="lock-icon" />
                  <a href={ item.url }>
                    { item.name }
                    <AiOutlineLink className="link-icon" />
                  </a>
                </h4>
                <div className="info-container">
                  <p className="info-content">
                    <span className="info">Login</span>
                    <span className="info-input">{ item.login }</span>
                  </p>
                </div>
                <div className="info-container">
                  <p className="info-content">
                    <span className="info">Senha</span>
                    <span className="info-input">
                      { !hidePassword ? item.password : '******' }
                    </span>
                  </p>
                </div>
                <Button
                  dataTestId="remove-btn"
                  handleClick={ () => handleDelete(item.id) }
                  text=""
                  className="trash"
                />
              </div>
            );
          })
      }
    </div>
  );
}
export default Card;
