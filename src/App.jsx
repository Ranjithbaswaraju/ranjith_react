// import { useState } from "react"
// import ProfileHidden from "./components/ProfileHidden"

// function App() {
//   const[profile,SetProfile]=useState("")
//     const user={
//     name: "Jane Doe",
//     age: 28,
//     location: "New York City",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     }

//     const manageProfile=()=>{
//         SetProfile(!profile)
//     }
//     return(
//         <>
//         <div className="app_container">
//             <button onClick={manageProfile}>{profile ? "hideProfile" :"show profile"}</button>
//         </div>
//         {profile && <ProfileHidden {...user}/>}
//         {/* passes all properties from user object as props: */}
//         </>
//     )
// }

// export default App


import React, { useState } from "react";
import ProfileHidden from "./components/ProfileHidden";


const App=()=>{
const [profile,setProfile]=useState(false)

const user={
  name:"ranjith",
  age:25,
  location:'Cherial',
  avatar: "https://randomuser.me/api/portraits/women/44.jpg"
}

const manageProfile=()=>{
  setProfile(!profile)
}
return(
  <div>
    <div className="profile">
        <button onClick={manageProfile}>{profile ? "Hide Profile" :"show profile"}</button>
    </div>
    {profile && <ProfileHidden {...user}/>}
  </div>
)
}
export default App;