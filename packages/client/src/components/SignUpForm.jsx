import '../styles/Form.css';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      agreement: true,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
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
            placeholder="Enter your email address"
          />
          {errors.email && <p>{errors.email.required}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
              pattern: {
                value: /[0-9]/,
                message: 'Password must contain numbers',
              },
            })}
            type="password"
            className="form-input"
            placeholder="Enter your password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="policy-components">
          <div className="checkbox-form">
            <input
              {...register('agreement', {
                required: 'You must agree Privacy Policy and Cookie Policy',
              })}
              type="checkbox"
              id="agree-policy"
              className="checkbox"
            />
            {errors.agreement && <p>{errors.agreement}</p>}
            <label htmlFor="agree-policy" className="checkbox-label">
              I agree <a href="#">Privacy Policy,</a> and <a href="#">Cookie Policy</a>
            </label>
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

export default SignUpForm;
