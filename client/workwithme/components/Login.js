import React, { useState } from 'react';


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

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(username, password);
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
            </div>
        </div>
    );

}

export default Login;