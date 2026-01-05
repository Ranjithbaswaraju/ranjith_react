
// import React from "react";

// const Child = ({ data }) => {
//   const [name, age] = data.includes("_") ? data.split("_") : ["", ""];

//   return (
//     <>
//       {name && age ? (
//         <div>{`{name :${name}, age :${age}}`}</div>
//       ) : (
//         <div>
//           <p>enter data in name_age format</p>
//         </div>
//       )}
//     </>
//   );
// };
// // export default Child;




// stateuplifting example


import React from "react";


const Child=({setName})=>{ 


  return(<>
  <input
  type="text"
  // value={name}
  onChange={(e)=>setName(e.target.value)}
  
  />
  
  </>)
}
export default Child