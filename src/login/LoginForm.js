import React, { useState } from "react"

function Login({ Login, error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                {(error !=="") ? ( <div>{error}</div> ) : ""}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={e => setDetails(
                            {...details, email: e.target.value})} 
                        value={details.email} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={e => setDetails(
                            {...details, password: e.target.value})} 
                        value={details.password}/>
                </div>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;