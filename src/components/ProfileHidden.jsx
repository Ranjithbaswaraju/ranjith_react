// import React, { useState } from "react";


const ProfileHidden=({name,age,location,avatar})=>{
     return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{location}</p>
        <img src={avatar}/>
    </div>
  );
}
export default ProfileHidden;