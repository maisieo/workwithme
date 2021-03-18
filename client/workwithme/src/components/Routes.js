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

            <Route exact path="/new-bubble"
            render = {() => <NewBubble showNewBubble={props.showNewBubble()}/>}>
            </Route> 

            <Route exact path="/join-bubble">
            <JoinBubble/>
            </Route>

            <Route exact path="/new-bubble-created">
            <MapWithNewBubble bubble={props.bubble} />
            </Route>
    
        </Switch>
    );
}
//component={PlantSitterForm} 
// onAddSitter={props.addSitter}


export default Routes;