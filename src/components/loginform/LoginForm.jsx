import React from "react";
import './loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginForm () {
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />

                </div>
                <div className="input-box">
                    <input type="text" placeholder='Password' required/>
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" /></label>
                    <a href="#">Forgot passwprd</a>
                </div>
                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>

    )
}