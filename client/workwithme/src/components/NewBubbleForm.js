// import React from "react";
// const NewBubbleForm = ({
//   firstname,
//   handleChange,
//   handleWifi,
//   handleKitchen,
//   handlePet,
//   handleQuiet,
//   handleWheelchair,
//   handleSmoking,
//   location,
//   workstations,
//   wifi,
//   petfriendly,
//   kitchen,
//   quietspace,
//   wheelchair,
//   smoking,
// }) => (
//   <div>
//     <label>
//       {" "}
//       Name
//       <input
//         name="firstname"
//         type="text"
//         value={firstname}
//         onChange={handleChange}
//         required
//         autoComplete="nope"
//       ></input>
//     </label>
//     <label>
//       {" "}
//       Location
//       <input
//         name="location"
//         type="text"
//         value={location}
//         onChange={handleChange}
//         required
//         autoComplete="nope"
//       ></input>
//     </label>
//     <label>
//       {" "}
//       How many workstations do you offer?
//       <select
//         name="workstations"
//         value={workstations}
//         onChange={handleChange}
//         required
//       >
//         <option id="empty">0</option>
//         <option id="one">1</option>
//         <option id="two">2 </option>
//         <option id="three">3 </option>
//         <option id="four">4</option>
//       </select>
//     </label>
//     <label>
//       Which features does your bubble have?
//       <span>
//         {" "}
//         Wifi
//         <input type="checkbox" onClick={handleWifi.handleWifi} value={wifi} />
//       </span>
//       <span>
//         {" "}
//         Pet friendly
//         <input
//           type="checkbox"
//           value={petfriendly}
//           onClick={handlePet.handlePet}
//           onChange={handleChange}
//         ></input>
//       </span>
//       <span>
//         {" "}
//         Access to kitchen
//         <input type="checkbox" value={kitchen} onClick={handleKitchen.handleKitchen}></input>
//       </span>
//       <span>
//         {" "}
//         Quiet space
//         <input
//           type="checkbox"
//           value={quietspace}
//           onChange={handleChange}
//           onClick={handleQuiet.handleQuiet}
//         ></input>
//       </span>
//       <span>
//         {" "}
//         Wheelchair access
//         <input
//           type="checkbox"
//           value={wheelchair}
//           onChange={handleChange}
//           onClick={handleWheelchair.handleWheelchair}
//         ></input>
//       </span>
//       <span>
//         {" "}
//         Smoking corner
//         <input type="checkbox" value={smoking} onChange={handleChange} onClick={handleSmoking.handleSmoking}></input>
//       </span>
//     </label>
//   </div>
// );
// export default NewBubbleForm;