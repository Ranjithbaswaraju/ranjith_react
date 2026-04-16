import React, { useState } from "react";
import UserCard from "./react_task_components/profile_hidden_task1";

const App=()=>{
  const[showProfile,setShowProfile]=useState(true)

  const user={
    name:'ranjith',
    age:43,
    avatar:"https://i.pravatar.cc/150?img=5",
    location:"siddipet"
  }

  const clickHandler=()=>{
    setShowProfile(!showProfile)
    
  }
  return(
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button onClick={clickHandler}>{showProfile ? "Hide Profile" :"Show Profile"}</button>
    {showProfile && <UserCard user={user}/>}
    </>
  )
}
export default App;