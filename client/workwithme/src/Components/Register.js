import React, { useState } from "react";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(event) {
    let { name, value, email } = event.target;
    switch (name) {
      case "emailInput":
        setEmail(value);
        break;
      case "usernameInput":
        setUsername(value);
        break;
      case "passwordInput":
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

        {props.error && <div>{props.error}</div>}

        {
          <div>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  value={username}
                  onChange={handleChange}
                ></input>
                          </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handleChange}
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Username</label>
                <input
                  type="username"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="username"
                  required
                  value={username}
                  onChange={handleChange}
                ></input>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          //   <Form onSubmit={handleSubmit}>
          //     <Form.Group controlId="exampleForm.ControlInput1">
          //       <Form.Label>Username</Form.Label>
          //       <Form.Control
          //         type="username"
          //         placeholder="example123"
          //         required
          //         value={username}
          //         onChange={handleChange}
          //       />
          //     </Form.Group>
          //     <Form.Group controlId="exampleForm.ControlInput1">
          //       <Form.Label>Email address</Form.Label>
          //       <Form.Control
          //         type="email"
          //         placeholder="name@example.com"
          //         required
          //         value={email}
          //         onChange={handleChange}
          //       />
          //     </Form.Group>
          //     <Form.Group controlId="exampleForm.ControlInput1">
          //       <Form.Label>Password</Form.Label>
          //       <Form.Control
          //         type="password"
          //         placeholder="PasswOrd12"
          //         required
          //         value={password}
          //         onChange={handleChange}
          //       />
          //     </Form.Group>
          //   </Form>
          /* <form onSubmit={handleSubmit}>
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
                </form> */
        }
      </div>
    </div>
  );
}

export default Register;
