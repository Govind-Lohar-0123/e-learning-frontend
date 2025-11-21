import { isValidEmail, isValidPassword } from '../validation/regularEx';
import { removeMsg } from '../assets/data';

export default async function loginValidation(user, setMessage) {
  for (let key in user) {
    if (user[key] == '') {
      setMessage({ status: true, msg: 'Please Fill All Field...' });
      removeMsg(setMessage);
      return false;
    }
  }

  if (!isValidEmail(user.email)) {
    setMessage({ status: true, msg: 'Please Enter Valid Email ' });
  } else if (!isValidPassword(user.password)) {
    setMessage({ status: true, msg: 'Please Enter Valid Password' });
  } else return true;
  removeMsg(setMessage);
  return false;
}
