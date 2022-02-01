import React, { useState } from "react"
import LoginForm from "./LoginForm";

function Login() {
        const adminUser = {
        email: "test@email.com",
        password: "test123"
    }

    const [user, setUser] = useState({
        email:""
    })

    const [error, setError] = useState("");

    const Login = details => {
        if (details.email === adminUser.email && details.password === adminUser.password) {
        setUser({
            email: details.email
        })
        } else {
        setError("Details do not match!")
        }
    }

    const Logout = () => {
        setUser({email:""});
    }

    return (
         <div className="App">
      {(user.email !=="") ? (
        <div>
          <h2>Welcome</h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
       
    )
}

export default Login;