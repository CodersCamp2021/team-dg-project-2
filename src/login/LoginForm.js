import React, { useState } from "react"
import logo from '../../public/logo.svg';
import './styles/Form.css';

function Login({ Login, error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="form-content">
            <div className="logo">
                <img src={logo} alt="logo" />
                <a href='#' className='text-logo'>
                    Thats.me
                </a>
            </div>
            <form className='form' onSubmit={submitHandler}>
                <h1>Log in</h1>
                <div className="details-error">
                    {(error !=="") ? ( <div>{error}</div> ) : ""}
                </div>
                <div className='form-inputs'>
                    <label htmlFor="email" 
                    className="form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className='form-input'
                        placeholder='Enter your email addres' 
                        onChange={e => setDetails(
                            {...details, email: e.target.value})} 
                        value={details.email}     
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password"
                    className='form-label'>
                        Password
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className='form-input'
                        placeholder='Enter your password' 
                        onChange={e => setDetails(
                            {...details, password: e.target.value})} 
                        value={details.password}/>
                </div>
                <div className="password-components">
                    <div className='checkbox-form'>
                        <input type="checkbox" id="remember-me" name="remember-me" className='checkbox'/>
                        <label for="remember-me" 
                        className='checkbox-label-login'>
                            Remember me
                        </label>
                    </div>
                    <a href='#'>Forgot password?</a>
                </div>
                <button className='form-input-btn'
                type='submit'>
                    Log in
                </button>
            </form>
            <span className='form-input-login'>
                Don't have an account? <a href='#'>Sign up</a>
            </span>
        </div>
        
    )
}

export default Login;