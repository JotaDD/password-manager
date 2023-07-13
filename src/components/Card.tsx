import { DataTypeWithId } from '../types/types';
import Button from './Button';
import './Card.css';

type CardProps = {
  handleDelete: (itemId:string)=> void;
  hidePassword?: boolean
  passwordList: DataTypeWithId[];
};

function Card({ passwordList, handleDelete, hidePassword = false }: CardProps) {
  return (
    <div>
      {
        // .sort((a: DataTypeWithId, b: DataTypeWithId) => b.id.localeCompare(a.id))
        passwordList
          .map((item: DataTypeWithId) => {
            return (
              <div className="card" key={ item.id }>
                <p>
                  <a href={ item.url }>{ item.name }</a>
                  <br />
                  <span>login:</span>
                  <span>{ item.login }</span>
                </p>
                <p>
                  <span>senha:</span>
                  { !hidePassword
                    ? <span>{ item.password }</span>
                    : <span>******</span>}
                </p>
                <Button
                  dataTestId="remove-btn"
                  handleClick={ () => handleDelete(item.id) }
                  text="Deletar"
                  className="button"
                />
              </div>
            );
          })
      }
    </div>
  );
}
export default Card;
