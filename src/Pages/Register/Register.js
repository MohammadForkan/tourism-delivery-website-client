import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { signInUsingGoogle } = useAuth();

    const {
        handleUserRegister,
        handleUserLogin,
    } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    // console.log(email, password);

    const handleRegister = () => {
        handleUserRegister(email, password);
    };

    const handleLogin = () => {
        handleUserLogin(email, password);
    };


    return (
        <div className="login-form">
            <div>
                <br />
                <h2>Create Account</h2>
                <br />
                <form onSubmit="">
                    <input onChange={hanldeEmail} className="w-100" type="email" name="" id="" placeholder="Enter Your Email" />
                    <br /><br />
                    <input onChange={hanldePassword} className="w-100" type="password" name="" id="" placeholder="Enter Your Password" />
                    <br /><br />
                    <input onChange={hanldePassword} className="w-100" type="password" name="" id="" placeholder=" Re-Enter Your Password" />
                    <br /><br />
                    <button onClick={handleRegister} className="btn btn-danger w-100">Register</button>
                </form>
                <br />
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
                <div>-----------------------or----------------------</div>
                <br />
                <button onClick={signInUsingGoogle} className="btn btn-danger w-100">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;