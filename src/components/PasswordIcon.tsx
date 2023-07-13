import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';

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
