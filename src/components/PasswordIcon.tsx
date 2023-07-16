import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import './PasswordIcon.css';

type PasswordIconProp = {
  showPassword:boolean
};

function PasswordIcon({ showPassword }:PasswordIconProp) {
  return (
    <span>
      {showPassword ? <BsEyeSlashFill /> : <BsEyeFill /> }
    </span>
  );
}
export default PasswordIcon;
