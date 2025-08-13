// import axios from "axios";
// import React, { useRef, useState } from "react";

import axios from "axios";
import { use, useRef, useState } from "react";

// const TableUncontrolledValidation = () => {
//   const [err, setErr] = useState("");
//   const [apiErr, setApiErr] = useState("");
//   const [data, setData] = useState([]);

//   const usernameRef = useRef("");
//   const passwordRef = useRef("");

//   const validation = (username, password) => {
//     const form = {};

//     if (!username) {
//       form.usernameError = "please enter the username";
//     } else if (username.length > 20) {
//       form.usernameError = "Enter less than 20 characters";
//     }
//     if (!password) {
//       form.passwordError = "Please enter the password";
//     } else if (password.length > 20) {
//       form.passwordError = "Enter less than 20 characters";
//     }
//     return form;
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const usernameEntered = usernameRef.current.value;
//     const passwordEntered = passwordRef.current.value;

//     const Error = validation(usernameEntered, passwordEntered);

//     if (Object.keys(Error).length > 0) {
//       setErr(Error);
//     } else {
//       setErr("");
//       loginApi(usernameEntered, passwordEntered);
//     }
//   };

//   const loginApi = async (username, password) => {
//     try {
//       const response = await axios.post("https://dummyjson.com/user/login", {
//         username,
//         password,
//       });
//       setApiErr("");
//       console.log(response);

      
//       const isAlreadyAdded = data.some(
//         (item) => item.username === username && item.password === password
//       );
// //here code is to the prevenition of adding duplicate username and password

//       if (!isAlreadyAdded) {
//         setData((prevData) => [...prevData, { username, password }]);
//       } else {
//         setApiErr("This username and password is already added.");
//       }
//     } catch (err) {
//       console.log(err);
//       setApiErr("Please enter valid username and password");
//     }
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Email address:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="username"
//             ref={usernameRef}
//           />
//           <span style={{ color: "red" }}>{err?.usernameError}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             type="password"
//             className="form-control"
//             id="pwd"
//             ref={passwordRef}
//           />
//           <span style={{ color: "red" }}>{err?.passwordError}</span>
//         </div>
//         <button type="submit" className="btn btn-default">
//           Submit
//         </button>
//         {apiErr && <p style={{ color: "red" }}>{apiErr}</p>}
//       </form>
//       {data.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>S.NO</th>
//               <th>Username</th>
//               <th>Password</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.username}</td>
//                   <td>{item.password}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };
// export default TableUncontrolledValidation;


const TableUncontrolledValidation=()=>{
  const[formErr,setFormErr]=useState("");
  const[apiErr,setApiErr]=useState("")
  const[data,setData]=useState([])
  

  const usernameRef=useRef("");
  const passwordRef=useRef("");

  const validations=(username,password)=>{
    const form={}


    if(!username){
      form.usernameError="please enter the username"
    }
    else if(username.length>20){
      form.usernameError="Enter less than 20 characters"
    }

    if(!password){
      form.passwordError='please enter the password'
    }
    else if(password.length>20){
      form.passwordError="Enter less than 20 characters"
    }
    return form
  }

const onSubmit=(e)=>{
  e.preventDefault()

  const usernameEntered=usernameRef.current.value
  const passwordEntered=passwordRef.current.value 

  const formE=validations(usernameEntered,passwordEntered)

  if(Object.keys(formE).length>0){
    setFormErr(formE)
  }
  else{
    loginApi(usernameEntered,passwordEntered)
    setFormErr('')
  }
}

const loginApi=async(username,password)=>{
  try{
    const response=await axios.post('https://dummyjson.com/auth/login',{
      username,
      password
    })
    console.log(response)
    setApiErr("Details are correct")


    const AlredyData=data.some((item)=>item.username===username && item.password===password)


    if(!AlredyData){
      setData((prevData)=>[...prevData,{username,password}])
    }
    else{
      setApiErr("This username and password is already added")
    }
  }
  catch(err){
    console.log(err)
    setApiErr("Please enter the correct values")
  }
}

  return(
    <>
    <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="username">Email address:</label>
    <input type="text" className="form-control" id="username" ref={usernameRef}/>
    <span style={{color:'red'}}>{formErr?.usernameError}</span>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
    <span style={{color:"red"}}>{formErr?.passwordError}</span>
  </div>
  
  <button type="submit" className="btn btn-default">
    Submit
  </button>
  {apiErr && <p style={{color:'red'}}>{apiErr}</p>}
</form>
{
  data.length>0 && (
    <table>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Username</th>
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
export default TableUncontrolledValidation;