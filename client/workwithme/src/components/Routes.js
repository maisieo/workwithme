import { React, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "./HomeView";
import NewBubble from "./NewBubble";
import JoinBubble from "./JoinBubble";
import MapWithNewBubble from "./MapWithNewBubble";
import Login from "./Login";
import Register from "./Register";

// import AuthenticatedRoute from "./AuthenticatedRoute";

function Routes({getBubbles, addBubble, deleteBubble, bubbles}) {
  return (
    <Switch>
      {/* Home: Use 'exact' or else this route will match EVERYTHING */}
      <Route path="/" exact>
        <HomeView />
      </Route>

      <Route exact path="/new-bubble">
        <NewBubble
          getBubbles={getBubbles}
          addBubble={addBubble}
          bubbles={bubbles}
        />
        {/* render = {() => <NewBubble showNewBubble={props.showNewBubble()}/>}> */}
      </Route>

      <Route exact path="/join-bubble">
        <JoinBubble bubbles={bubbles}/>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/register" exact>
        <Register />
      </Route>

      <Route exact path="/new-bubble-created">
        <MapWithNewBubble bubbles={bubbles} />
      </Route>

      <Route>{/* <AuthenticatedRoute /> */}</Route>
    </Switch>
  );
}
//component={PlantSitterForm}
// onAddSitter={props.addSitter}

export default Routes;
