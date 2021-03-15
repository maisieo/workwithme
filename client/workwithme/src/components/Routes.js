import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import NewBubble from "./NewBubble"
import JoinBubble from "./JoinBubble"
import MapWithNewBubble from './MapWithNewBubble';



function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView/>
            </Route>

            <Route exact path="/new-bubble">
            <NewBubble />
            </Route> 

            <Route exact path="/join-bubble">
            <JoinBubble/>
            </Route>

            {/* <Route exact path="/new-bubble-created">
                <MapWithNewBubble />
            </Route> */}
    
        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;