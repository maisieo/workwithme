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
        // <div className="Login">
        //     <div className="col-4 offset-4">
        //         <h2>Login</h2>
                
        //         {
        //             props.error && (
        //                 <div>{props.error}</div>
        //             )
        //         }

        //         <form onSubmit={handleSubmit}>
        //             <div className="form-group">
        //                 <label>Username
        //                     <input
        //                         type="text"
        //                         name="usernameInput"
        //                         required
        //                         value={username}
        //                         onChange={handleChange}
        //                     />
        //                 </label>
        //             </div>

        //             <div className="form-group">
        //                 <label>Password
        //                     <input
        //                         type="password"
        //                         name="passwordInput"
        //                         required
        //                         value={password}
        //                         onChange={handleChange}
        //                     />
        //                 </label>
        //             </div>

        //             <button type="submit">Submit</button>
        //         </form>
        //         <Link to="/register">Don't have an account yet? Register now!</Link>
        //     </div>
        // </div>
        <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    );

}

export default Login;