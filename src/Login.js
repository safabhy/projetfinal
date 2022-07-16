import React from 'react';
import { useState } from "react";



const Login = () => {
    const [state, setState] = useState(true);
    const RegisterForm = (
      <form id="Regform">
        <input type="text" placeholder="username" />
        <input type="E-mail" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button type="submit" class="w3-button w3-khaki">
          Register
        </button>
      </form>
    );

  const LoginForm = (
    <form id="loginform">
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button type="submit" class="w3-button w3-khaki" >
        Login
      </button>
     
    </form>
    );

    return (
        <div>
    <div className="acc-page">
      <div className="form-container">
        <div className="form-btn" >
          <span  onClick={() => setState(false)} >Login</span>
          
           <span onClick={() => setState(true)}>Register</span>
          
          {state?RegisterForm:LoginForm}
         </div>
        </div>
        </div>
       </div>
    );
};
export default Login;