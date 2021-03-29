import { React} from "react";
import { Route, Switch } from "react-router-dom";
// import HomeView from "./HomeView";
import NewBubble from "./NewBubble";
import JoinBubble from "./JoinBubble";
import MapWithNewBubble from "./MapWithNewBubble";
import Login from "./Login";
import Register from "./Register";
import { propTypes } from "react-bootstrap/esm/Image";
import CreateABubbleForm from "./CreateABubbleForm";
import About from "./About";
import HomeView from "./HomeView";

// import AuthenticatedRoute from "./AuthenticatedRoute";

function Routes({getBubbles, addBubble, deleteBubble, bubbles}) {
  return (
    <Switch>
       <Route path="/" exact>
        <HomeView />
      </Route>
      {/* Home: Use 'exact' or else this route will match EVERYTHING */}
      <Route path="/About" exact>
        <About />
      </Route>
      {/* <Route exact path="/plant-sitter"
            render = {() => <PlantSitterForm addSitter={props.addSitter()}/>}>
            </Route> */}

      <Route exact path="/new-bubble"
      render= {() => <CreateABubbleForm addBubble={addBubble()}/>}>
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
