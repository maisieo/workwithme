import React , {useState} from 'react';
import NewBubbleForm from './NewBubbleForm';




function NewBubble() {

    const [name , setName] = React.useState('');
    const [postcode , setPostcode] = React.useState('');
    const [workstations , setWorkstations] = useState(0);
    const [wifi , setWifi] = React.useState("")
   

    function handleChange(event) {
        // console.log('event: ', event)
        console.log(event.target.checked)
        switch (event.target.name) {
          case "name":
            setName(event.target.value);
            break;
          case "postcode":
            setPostcode(event.target.value);
            break;
          case "workstations":
            setWorkstations(event.target.value);
            break;
          case "wifi":
            setWifi(event.target.value);
            break;   
          default:
            break;
        }
     }

     function handleSubmit(event) {
        event.preventDefault();
        console.log(
        `A request has been logged: 
        From ${name} ${postcode} with ${workstations} spots and WIFI ${wifi}
        `)
        setName("");
        setPostcode("");
        setWorkstations("");
        setWifi("")
        // the submission event would then add the new bubble to the backend tables 
        // the map would then be returned with the new bubble on it
        
      }

    return (
        <div className="NewBubble">
            <form onSubmit={handleSubmit}>
            Create a new Bubble
            <NewBubbleForm 
            name={name}
            postcode = {postcode}
            workstations={workstations}
            handleChange = {handleChange}
            wifi={wifi}
            />
            <button id="buttonCreateBubble" type="submit"> Create a bubble </button>
            </form>
        </div>
    );
}

export default NewBubble;