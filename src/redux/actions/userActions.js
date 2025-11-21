import { removeMsg } from '../../assets/data';
import axios from '../../api/apiClient';
import { removeAccessToken, removeRole, setAccessToken, setRole } from '../../utils/localStorage';

export async function userLogin(user, setMessage) {
  try {
    const response = await axios.post('/login', user);

    if (response.data?.status) {
      const userRole = response.data.role;

      setAccessToken(response.data.accessToken);
      setRole(userRole);

      if (userRole !== 'Admin') {
        window.location.href = '/';
      } else {
        window.location.href = '/admin';
      }
      return;
    }

    setMessage({ status: true, msg: response.data?.msg || 'Login failed' });
    removeMsg(setMessage);
  } catch (err) {
    const errorMsg = err.message;
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
  }
}

export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/users');
    dispatch({ type: 'GET_USER', payload: response.data });
  } catch (err) {
    dispatch({ type: 'GET_USER', payload: {} });
  }
};

export async function userRegister(user, setMessage) {
  try {
    const response = await axios.post('/register', user);

    if (response.data.status) window.location = '/';
    else {
      setMessage({ status: true, msg: response.data.msg });
      removeMsg(setMessage);
      return;
    }
  } catch (err) {
    const errorMsg = err.message;
    setMessage({ status: true, msg: errorMsg });
    removeMsg(setMessage);
  }
}

export const getUsersCount = async (setUsersCount) => {
  try {
    var result = await axios.get('/users/count');
    setUsersCount(result.data);
  } catch (err) {
    setUsersCount(0);
  }
};

export async function logout() {
  removeAccessToken();
  removeRole();
  window.location = '/login';
}
