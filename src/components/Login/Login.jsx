import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./Login.css";

async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then((data) => data.json())
}

const Login = ({setToken}) => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserNameChange = ({target}) => setUserName(target.value);
    const handlePasswordChange = ({target}) => setPassword(target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({username, password});
        setToken(token);
    }

    return (
    <div className="login-wrapper">
        
        <h1>Please Log In</h1>

        <form onSubmit={handleSubmit}>

            <label>
                <p>Username</p>
                <input type="text" onChange={handleUserNameChange} />
            </label>

            <label>
                <p>Password</p>
                <input type="password" onChange={handlePasswordChange} />
            </label>

            <div><button type="submit">Submit</button></div>

        </form>
    </div>
)};

Login.prototype = {
    setToken: PropTypes.func.isRequired
};

export default Login;