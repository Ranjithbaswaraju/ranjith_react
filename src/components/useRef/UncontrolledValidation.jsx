
// import axios from "axios";
// import React, { useRef, useState } from "react";

// const UncontrolledValidation = () => {

//     const userNameRef=useRef("")
//     const passwordRef=useRef("")
//     const[formError,setFromError]=useState("")
//     const[apiErr,setApiErr]=useState("")

//     const onSubmit=(event)=>{
//         event.preventDefault()

//         const usernameEntered=userNameRef.current.value
//         const passwordEntered=passwordRef.current.value

//         const formError=validations(usernameEntered,passwordEntered)

//         if(Object.keys(formError).length>0){
//             setFromError(formError)
//         }
//         else{
//             loginApi(usernameEntered,passwordEntered)
//             setFromError("")
//         }
//     }

//     const validations=(username,password)=>{
//         const Form={};
//         if(!username){
//             Form.usernameError="please enter the username"
//         }
//         else if(username.length>20){
//             Form.usernameError="please enter the less then 20 characters"
//         }
//         if(!password){
//             Form.passwordError="please enter the password"
//         }
//         else if(password.length>20){
//             Form.passwordError="please enter the less than 20 characters"
//         }
//         return Form 
//     }

//     const loginApi=async(username,password)=>{
//         try{
//             const response=await axios.post('https://dummyjson.com/auth/login',{
//                 username:username,
//                 password:password
//             })
//             console.log(response)
//             setApiErr("") 
//         }
//         catch(err){
//             console.log(err)
//             setApiErr("please enter the correct values")
//         }
//     }
//     return(
//         <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" ref={userNameRef}/>
//     <span style={{color:'red'}}>{formError?.usernameError}</span>
//   </div>
//   <div className="form-group">
//     <label htmlFor="pwd">Password:</label>
//     <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
//     <span style={{color:'red'}}>{formError?.passwordError}</span>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
//   {apiErr && <p style={{color:"red"}}>{apiErr}</p>}
// </form>
//     )
// }
// export default UncontrolledValidation

// import axios from "axios";
// import React, {  useRef, useState } from "react";


// const UncontrolledValidation=()=>{
//   const[formError,setFormError]=useState({})
//   const[apiError,setApiError]=useState("")

//   const usernameRef=useRef("")
//   const passwordRef=useRef("")

//   const validations=(username,password)=>{
//     const form={}

//     if(!username){
//       form.usernameError="please enter the username"
//     }
//     else if(username.length>20){
//       form.usernameError="Enter lessthan 20 characters"
//     }
//     if(!password){
//       form.passwordError="please enter the password"
//     }
//     else if(password.length>20){
//       form.passwordError="Enter less than 20 characters"
//     }
//     return form
//   }

//   const onSubmit=(e)=>{
//     e.preventDefault()

//     const usernameEntered=usernameRef.current.value
//     const passwordEntered=passwordRef.current.value

//     const formE=validations(usernameEntered,passwordEntered)
//     if(Object.keys(formE).length>0){
//       setFormError(formE)
//     }
//     else{
//       loginApi(usernameEntered,passwordEntered)
//       setFormError("")
//     }
//   }
//   const loginApi=async(username,password)=>{
//     try{
//       const response=await axios.post('https://dummyjson.com/auth/login',{
//         username:username,
//         password:password
//       })
//       console.log(response)
//       setApiError("Details are Matching")
//     }
//     catch(err){
//       console.log(err)
//       setApiError("Please enter the correct value")
//     }
//   }
//   return(
//     <>
//     <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" ref={usernameRef}/>
//     <span style={{color:'red'}}>{formError?.usernameError}</span>
//   </div>
//   <div className="form-group">
//     <label htmlFor="pwd">Password:</label>
//     <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
//     <span style={{color:'red'}}>{formError?.passwordError}</span>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
//   {apiError && <p style={{color:"red"}}>{apiError}</p>}
// </form>
//     </>
//   )
// }
// export default UncontrolledValidation


import axios from "axios";
import React, { useRef, useState } from "react";

const UncontrolledValidation=()=>{

  const[formError,setFormError]=useState('')
  const[apiErr,setApiErr]=useState("")
    
  const usernameRef=useRef("")
  const passwordRef=useRef("")

  const validations=(username,password)=>{
    const form={}

    if(!username){
      form.usernameError='please enter the username'
    }
    else if(username.length>20){
      form.usernameError="Enter less than 20 characters"
    }
    if(!password){
      form.passwordError="please enter the password"
    }
    else if(password.length>20){
      form.passwordError="Enter less than 20 characters"
    }
    return form
  }
  const ranjith=(e)=>{
  e.preventDefault()

  const usernameEntered=usernameRef.current.value;
  const passwordEntered=passwordRef.current.value;

  const formE=validations(usernameEntered,passwordEntered)
    if(Object.keys(formE).length>0){
      setFormError(formE)
    }
    else{
      loginApi(usernameEntered,passwordEntered)
      setFormError("")
    }
  }
  const loginApi=async(username,password)=>{
    try{
      const response=await axios.post('https://dummyjson.com/auth/login',{
        username:username,
        password:password
      })
      console.log(response)
      setApiErr("Correct Details")
    }
    catch(err){
      console.log(err)
      setApiErr("Please enter the correct value")
    }

  }
    
  return(
      <>
      <form onSubmit={ranjith}>
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="username" ref={usernameRef}/>
    <span style={{color:'red'}}>{formError?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef} />
    <span style={{color:'red'}}>{formError?.passwordError}</span>

  </div>
  
  <button type="submit" className="btn btn-default">
    Submit
  </button>
  {apiErr && <p style={{color:"red"}}>{apiErr}</p>}
</form>

      
      </>
    )
}
export default UncontrolledValidation

