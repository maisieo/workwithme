import React, { useState } from 'react';


function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleChange(event) {
        let { name, value, email } = event.target;
        switch (name) {
            case 'emailInput':
                setEmail(value);
                break;
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
        props.onSubmit(email, username, password);
    }

    return (
        <div className="Register">
            <div className="col-4 offset-4">
                <h2>Register</h2>
                
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

                    <div className="form-group">
                        <label>Email
                            <input
                                type="email"
                                name="emailInput"
                                required
                                value={email}
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

export default Register;