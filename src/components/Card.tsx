import { DataTypeWithId } from '../types/types';
import './Card.css';

type CardProps = {
  passwordList: DataTypeWithId[];
};

function Card({ passwordList }: CardProps) {
  return (
    <div>
      {
        // .sort((a: DataTypeWithId, b: DataTypeWithId) => b.id.localeCompare(a.id))
        passwordList
          .map((item: DataTypeWithId) => {
            console.log(typeof item.id);
            return (
              <p className="card" key={ item.id }>
                <p>
                  <a href={ item.url }>{ item.name }</a>
                  <br />
                  <span>{item.id }</span>
                  <span>login:</span>
                  <span>{ item.login }</span>
                </p>
                <p>
                  <span>senha:</span>
                  <span>{ item.password }</span>
                </p>
              </p>
            );
          })
      }
    </div>
  );
}
export default Card;
