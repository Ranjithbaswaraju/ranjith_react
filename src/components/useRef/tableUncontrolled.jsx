import axios from "axios";
import React, { useRef, useState } from "react";


const TableUncontrolledValidation=()=>{
  const[formErr,setFormErr]=useState("")
  const[apiErr,setApiErr]=useState("")
  const[data,setData]=useState([])

  const usernameRef=useRef("")
  const passwordRef=useRef("")


  const Validations=(username,password)=>{
    let form={}

    if(!username){
      form.usernameError="Please Enter Username"
    }
    else if(username.length>20){
      form.usernameError="Please enter less than 10 characters"
    }

    if(!password){
      form.passwordError="Please Enter password"
    }
    else if(password.length>20){
      form.passwordError="Please Enter the less than 10 characters"
    }
    return form
  }

  const loginApi=async(username,password)=>{
   try{
     const response=await axios.post("https://dummyjson.com/auth/login",{
      username,
      password
    })
    console.log(response)
    setFormErr("")
    
    setApiErr("")

    const AlreadyData=data.some((item)=>item.username==username && item.password==password)

    if(!AlreadyData){
      setData((prevData)=>[...prevData,{username,password}])
    }
    else{
      setApiErr("The entered username and password already exists in table")
    }

   }
   catch(err){
    console.log(err)
    setApiErr("Entered Details are wrong")

   }
  }

  const ranjith=(e)=>{
    e.preventDefault()

    const usernameEntered=usernameRef.current.value
    const passwordEntered=passwordRef.current.value


    const FormE=Validations(usernameEntered,passwordEntered)

    if(Object.keys(FormE).length>0){
      setFormErr(FormE)
    }
    else{
      loginApi(usernameEntered,passwordEntered)
      setFormErr("")
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
      ref={usernameRef}
    />
   <span style={{color:"red"}}>{formErr.usernameError}</span>
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
    <span style={{color:"red"}}>{formErr.passwordError}</span>
  </div>
  
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
  {apiErr && <p style={{color:"red"}}>{apiErr}</p>}
</form>
{
  data.length>0 && (
    <table>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>UserName</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
    
    
    </>
  )

}
export default TableUncontrolledValidation