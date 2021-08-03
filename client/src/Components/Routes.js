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
import BubbleList from "./BubbleList";

// import AuthenticatedRoute from "./AuthenticatedRoute";

function Routes({getBubbles, addBubble, deleteBubble, bubbles}) {
  return (
    <Switch>
       <Route path="/" exact>
        <HomeView />
      </Route>

      <Route path="/about" exact>
        <About />
      </Route>

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
      <Route exact path="/all-bubbles">
        <BubbleList bubbles={bubbles} onDelete={id => deleteBubble(id)}/>
      </Route>

      <Route>{/* <AuthenticatedRoute /> */}</Route>
    </Switch>
  );
}
//component={PlantSitterForm}
// onAddSitter={props.addSitter}

export default Routes;
