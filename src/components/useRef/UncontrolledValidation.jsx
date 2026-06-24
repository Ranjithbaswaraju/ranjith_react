import axios from "axios";
import { useRef, useState } from "react";

const UncontrolledValidation=()=>{
  const[formError,setFormError]=useState("")
  const[apiErr,setApiErr]=useState("")

  const userNameRef=useRef("")
  const passwordRef=useRef("")

  const validations=(username,password)=>{
    let form={}


    if(!username){
      form.usernameError="Please Enter User Name"
    }
    else if(password.length>10){
      form.usernameError="Please Enter Password lessthan 20 characters"
    }

    if(!password){
      form.passwordError="Please Enter password"
    }
    else if(password.length>10){
      form.passwordError="Please enter less than 10 characters"
    }

    return form
  }


  const ranjith=(e)=>{
    e.preventDefault()

    const usernameEntered=userNameRef.current.value
    const passwordEntered=passwordRef.current.value

    const FormE=validations(usernameEntered,passwordEntered)

    if(Object.keys(FormE).length>0){
      setFormError(FormE)
    }
    else{
      loginApi(usernameEntered,passwordEntered)
      setFormError("")
    }

  }

  const loginApi=async(username,password)=>{
    try{
      const response=await axios.post("https://dummyjson.com/auth/login",{
        username,
        password
      })
      console.log(response)
      setApiErr("Correct Details")
      setApiErr("")
      
     
    }
    catch(err){
      console.log(err)
       setApiErr("Incorrect Details")
    }
  }

  return(
    <>
    <form onSubmit={ranjith}>
  <div className="form-group">
    <label htmlFor="username">Email address</label>
    <input
      type="text"
      className="form-control"
      id="username"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      ref={userNameRef}
    />
    <span style={{color:"red"}}>{formError.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Password"
      ref={passwordRef}
    />
    <span style={{color:'red'}}>{formError.passwordError}</span>
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
   
</form>
{apiErr && <p style={{color:"red"}}>{apiErr}</p>}

    
    </>
  )

}
export default UncontrolledValidation