import React from 'react';
import useForm from './useForm'
import validate from './Validate';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors}
     = useForm(
         submitForm,
         validate
       );

  return (
    <div className='form-content'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Sign up</h1>
            <div className='form-inputs'>
                <label htmlFor='email' 
                className='form-label'>
                    Email
                </label>
                <input 
                    type='text'
                    name='email' 
                    className='form-input'
                    placeholder='Enter your email'  
                    value={values.email}    
                    onChange={handleChange}  
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='password' 
                className='form-label'>
                    Password
                </label>
                <input 
                    type='password' 
                    name='password' 
                    className='form-input'
                    placeholder='Enter your password'  
                    value={values.password}    
                    onChange={handleChange}  
                />
               {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn'
            type='submit'>
                Sign up
            </button>
        </form>
        <span className='form-input-login'>
             Already a member? <a href='#'>Log in</a>
        </span>
    </div>
  );
};

export default SignupForm;
