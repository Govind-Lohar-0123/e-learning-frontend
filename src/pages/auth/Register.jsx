import { useState } from 'react';
import registerValidation from '../../validation/registerValidation.js';
import { userRegister } from '../../redux/actions/userActions.js';

const userInitialData = {
  name: '',
  email: '',
  password: '',
  conf_password: '',
};

export default function Register() {
  const [user, setUser] = useState(userInitialData);
  const [message, setMessage] = useState({ status: false, msg: '' });
  async function registerHandle(e) {
    e.preventDefault();
    var isValid = await registerValidation(user, setMessage);
    if (isValid) {
      var data = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      userRegister(data, setMessage);
    }
  }

  function registerInputHandle(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  return (
    <div className="d-flex align-items-center w-100" style={{ height: '80vh' }}>
      <div
        className="container p-4  shadow rounded "
        style={{ maxWidth: '500px' }}
      >
        {message.status ? (
          <div class="alert alert-primary" role="alert">
            {message.msg}
          </div>
        ) : (
          ''
        )}
        <h4 className="text-center fw-bold mb-4">REGISTER</h4>

        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleInputName"
              className="form-label fw-semibold"
            >
              <i className="fa-regular fa-envelope me-2 text-dark"></i>Enter
              Full Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              onChange={registerInputHandle}
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label fw-semibold"
            >
              <i className="fa-regular fa-envelope me-2 text-dark"></i>Enter
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              onChange={registerInputHandle}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3 my-2">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-semibold"
            >
              <i className="fa-solid fa-lock me-2"></i>Password
            </label>
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={registerInputHandle}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3 my-2">
            <label
              htmlFor="exampleInputPassword2"
              className="form-label fw-semibold"
            >
              <i className="fa-solid fa-lock me-2"></i>Confirm Password
            </label>
            <input
              type="password"
              name="conf_password"
              defaultValue={user.conf_password}
              onChange={registerInputHandle}
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Enter Confirm Password"
            />
          </div>
          <a href="/login" className="text-primary">
            Login
          </a>

          <button
            type="button"
            onClick={registerHandle}
            className="btn btn-primary mt-3 fw-bold mx-auto d-block w-50 mt-3"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
