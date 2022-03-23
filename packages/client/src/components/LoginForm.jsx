import '../styles/Form.css';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../utils/auth';

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: '',
    },
  });

  const onSubmit = (data) => {
    axios({
      method: 'POST',
      data,
      withCredentials: true,
      url: 'http://localhost:4000/api/users/login',
    }).then((res) => {
      console.log(res);
      console.log(res.data.email);
      auth.login(res.data.email);
      navigate('/editor-mode');
    });
  };

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Log in</h1>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register('email', {
              required: 'Email required',
            })}
            type="email"
            className="form-input"
            placeholder="Enter your email addres"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register('password', {
              required: 'Password required',
            })}
            type="password"
            className="form-input"
            placeholder="Enter your password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="password-components">
          <div className="checkbox-form">
            <input {...register('remember')} type="checkbox" className="checkbox" />
            <label htmlFor="remember-me" className="checkbox-label-login">
              Remember me
            </label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button className="form-input-btn" type="submit">
          Log in
        </button>
      </form>
      <span className="form-input-login">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </span>
    </div>
  );
};

export default LoginForm;
