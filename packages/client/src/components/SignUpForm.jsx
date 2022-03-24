import '../styles/Form.css';

import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [message, setMessage] = useState('');
  const [currentSlugInput, setCurrentSlugInput] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      slug: '',
      agreement: true,
    },
  });

  const onSubmit = (data) => {
    axios({
      method: 'POST',
      data,
      withCredentials: true,
      url: 'http://localhost:4000/api/users',
    })
      .then((res) => {
        reset();
        navigate('/log-in');
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.error);
        }
      });
  };

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
        <div className="form-inputs">
          <span className="message-error">{message}</span>
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
          {errors.email && <p>{errors.email.message}</p>}
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
        <div className="form-inputs no-margin-bottom">
          <label htmlFor="slug" className="form-label">
            Subdomain
          </label>
          <input
            {...register('slug', {
              required: 'Subdomain name required',
              pattern: {
                value: /^\S*$/,
                message: 'No space allowed',
              },
            })}
            type="text"
            className="form-input"
            placeholder="Enter your subdomain"
            // value={currentSlugInput}
            onChange={(e) => setCurrentSlugInput(e.target.value)}
          />
          {errors.slug && <p>{errors.slug.message}</p>}
        </div>
        <p className="slug-info">Your page will be accessible under: thats.me/{currentSlugInput}</p>
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
            {errors.agreement && <p>{errors.agreement.message}</p>}
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
