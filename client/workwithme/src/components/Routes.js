import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';
import NewBubble from "./NewBubble";
import JoinBubble from "./JoinBubble";
import MapWithNewBubble from './MapWithNewBubble';
import Login from "./Login";
import Register from "./Register";
import AuthenticatedRoute from "./AuthenticatedRoute";


function Routes(props) {
 const [bubbles, setBubbles] = useState([]);
    useEffect(() => {
        getBubbles();
      }, []);
    
      //function to get the walks from the database
      const getBubbles = () => {
        fetch("/bubbles")
          .then(result => result.json())
          .then(bubbles => {
            setBubbles(bubbles);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      //Deletes walks from the database
      function deleteBubble(id) {
        console.log("Delete bubble console log" + id);
        let options = {
          method: "DELETE"
          // body: JSON.stringify(walks)
        };
    
        fetch(`/bubbles/${id}`, options)
          .then(result => result.json())
          .then(bubbles => {
            setWalks(bubbles);
          })
          .catch(err => {
            console.log("error!", err.message);
          });
      }
    
      //Adds a walk to the database
      function addBubble (ownername,
        place,
        totalws,
        wifi,
        petfriendly,
        kitchen,
        quietspace,
        smokerfriendly,
        availablews,
        wheelchairaccess,
        usersinbubble,) {
        let newBubble = {ownername,
          place,
          totalws,
          wifi,
          petfriendly,
          kitchen,
          quietspace,
          smokerfriendly,
          availablews,
          wheelchairaccess,
          usersinbubble};
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          //this tells the server in what format to expect the data
          body: JSON.stringify(newBubble) //object needs to converted to json (with stringify)
        };
        fetch("/bubbles", options)
          .then(result => result.json())
          .then(bubbles => {
            setBubbles(bubbles);
          })
          .catch(err => {
            console.log("error!", err.message);
          });
      }
    
      


    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView/>
            </Route>

            <Route exact path="/new-bubble">
           <NewBubble getBubbles={getBubbles} addBubble={addBubble} deleteBubble={deleteBubble}/>
                 {/* render = {() => <NewBubble showNewBubble={props.showNewBubble()}/>}> */}
            </Route> 

            <Route exact path="/join-bubble">
            <JoinBubble/>
            </Route>

            <Route path="/login" exact>
                <Login />
            </Route>

            <Route path="/register" exact>
                <Register/>
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