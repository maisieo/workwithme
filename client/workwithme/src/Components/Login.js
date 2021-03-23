import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function doLogin(username,password) {
        // login
        console.log(username, password)
    }

    // function onSubmit(username, password) {
        
    // }

    function handleSubmit(event) {
        event.preventDefault();
        doLogin(username, password);
    }

    return (
        <div className="Login">
            <div className="col-4 offset-4">
                <h2>Login</h2>
                
                {
                    props.error && (
                        <div>{props.error}</div>
                    )
                }

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Username
                            <input
                                type="text"
                                name="usernameInput"
                                required
                                value={username}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>Password
                            <input
                                type="password"
                                name="passwordInput"
                                required
                                value={password}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button type="submit">Submit</button>
                </form>
                <Link to="/register">Don't have an account yet? Register now!</Link>
            </div>
        </div>
    );

}

export default Login;