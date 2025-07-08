import React, { useRef, useState } from "react";

const UncontrolledValidation = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const[formError,setFromError]=useState({})

const onSubmit=(e)=>{
    e.preventDefault()

    const usernameEntered=usernameRef.current.value;
    const passwordEntered=passwordRef.current.value;

    const FormError=validations(usernameEntered,passwordEntered)

    
}

const validations=(userrname,password)=>{
    form={}

    if(!username){
        form.usernameError="Please enter username"
    }
    else if(username.length<5){
        form.usernameError="Username should be more than 5 characters"
    }
    else{
        form.usernameError=""
    }
}

  return (
    <>
      <form onSubmit={onsubmit}>
        <div className="form-group">
          <label htmlFor="username">Email address:</label>
          <input type="text" className="form-control" id="username" ref={usernameRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
        </div>
        
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};
export default UncontrolledValidation;
