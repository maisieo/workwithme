import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import NewBubble from "./NewBubble";
import JoinBubble from "./JoinBubble";
import MapWithNewBubble from './MapWithNewBubble';
import Login from "./Login";
import Register from "./Register";
import AuthenticatedRoute from "./AuthenticatedRoute";

async function doRegister(username, password, email) {
    let newUser = {username, password, email}
    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .catch((err) => console.log("ERROR:", err.message));
}

function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView/>
            </Route>

            <Route exact path="/new-bubble">
           <NewBubble />
                 {/* render = {() => <NewBubble showNewBubble={props.showNewBubble()}/>}> */}
            </Route> 

            <Route exact path="/join-bubble">
            <JoinBubble/>
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/register" exact>
                <Register
                onSubmit={(u, p, e) => doRegister(u, p, e)} 
                />
            </Route>

            <Route exact path="/new-bubble-created">
            <MapWithNewBubble bubble={props.bubble} />
            </Route>
            <Route>
                <AuthenticatedRoute />
            </Route>
    
        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;