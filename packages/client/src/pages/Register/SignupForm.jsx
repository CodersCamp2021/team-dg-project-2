import React from 'react';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './Validate';
import '../../styles/Form.css';
// import logo from '../../../public/logo.svg';

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className="form-content">
      {/* <div className="logo">
            <img src={logo} alt="logo" />
            <a href='#' className='text-logo'>
                Thats.me
            </a>
        </div> */}
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Enter your email addres"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="policy-components">
          <div className="checkbox-form">
            <input type="checkbox" id="agree-policy" name="agree-policy" className="checkbox" />
            <label htmlFor="agree-policy" className="checkbox-label">
              I agree <a href="#">Privacy Policy,</a> and <a href="#">Cookie Policy</a>
            </label>
            {errors.checkbox && <p>{errors.checkbox}</p>}
          </div>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
      <span className="form-input-login">
        Already a member? <Link to="/log-in">Log in</Link>
      </span>
    </div>
  );
};

export default FormSignup;
