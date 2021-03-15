import React from 'react';

const NewBubbleForm = ({name, handleChange, postcode , workstations , wifi}) => (
    <div>
            <label> Name
            <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            required
            autoComplete="nope"
            >
            </input>
          </label>

          <label> Postcode
           <input 
           name="postcode" 
           type="text"
           value={postcode} 
           onChange={handleChange}
           >
          </input>
          </label>

          <label> How many workstations do you offer?
          <select 
           name="workstations" 
           value={workstations} 
           onChange={handleChange}
           required>
           <option id="one" >1</option>
            <option id="two" >2 </option>
            <option id="three" >3 </option>
            <option id="four" >4</option>
          </select>
          </label>

          <label>Which features does your bubble have?
            <span> Wifi
            <input 
            type="checkbox"
            value={wifi}
            onChange={handleChange}
            > 
            </input>
            </span>
            <span> Pet friendly
            <input type="checkbox"> 
            </input>
            </span>
            <span> Access to kitchen
            <input type="checkbox"> 
            </input>
            </span>
            <span> Quiet space
            <input type="checkbox"> 
            </input>
            </span>
            <span> Wheelchair access
            <input type="checkbox"> 
            </input>
            </span>
            <span> Smoking corner
            <input type="checkbox"> 
            </input>
            </span>
          </label>


          </div>
  );
  
  export default NewBubbleForm