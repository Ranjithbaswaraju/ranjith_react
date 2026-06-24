// import React, { useState } from "react";

// const ControlledValidation=()=>{
//     const[model,setModel]=useState("")
//     const[error,setError]=useState("")

//     const modelValidations=(value)=>{
//         let err=""
//         const Regex=/^Samsung/i
//         if(!value){
//             err="Please enter the model"
//         }
//         else if(!Regex.test(value)){
//             err="please enter proper samsung model"
//         }
//         return err
//     }

//     const modelHandler=(e)=>{
//         const enteredModel=e.target.value
//         setModel(enteredModel)

//         const error=modelValidations(enteredModel)
//         if(error){
//             setError(error)
//         }
//         else{
//             setError("")
//         }


//     }

//     const onSubmit=(e)=>{
//         e.preventDefault()
//         if(error){
//             alert("Please fill properly")
//         }
//     }
//     return(
//         <>
//         <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Enter Samsung Model:</label>
//     <input type="text" className="form-control" id="username"  value={model} onChange={modelHandler}/>
//     <span style={{color:'red'}}>{error}</span>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>

//         </>
//     )
// }
// export default ControlledValidation


// import React, { useState } from "react";
// const ControlledValidation=()=>{

//     const[model,setModel]=useState('');

//     const[error,setError]=useState('');

//     const modelValidation=(value)=>{
//         let err=""
//         let Regex=/^Samsung/i
//         if(!value){
//             err="please enter model name"
//         }
//         else if(!Regex.test(value)){
//             err="please enter only samsung model"
//         }
//         return err   
//     }
//     const modelHandler=(event)=>{
//         const enteredModel=event.target.value
//         setModel(enteredModel)

//         const error=modelValidation(enteredModel)

//         if(error){
//             setError(error)
//         }
//         else{
//             setError("")
//         }
//     }
//     const onSubmit=(event)=>{
//         event.preventDefault()
//         if(error){
//             alert("Please fill properly")
//         }
//     }
// return(
//     <>
//     <form onSubmit={onSubmit}>
//   <div className="form-group">
//     <label htmlFor="username">Email address:</label>
//     <input type="text" className="form-control" id="username" value={model} onChange={modelHandler} /><br></br>
//     <span style={{color:'red'}}>{error}</span>
//   </div>
//   <button type="submit" className="btn btn-default">
//     Submit
//   </button>
// </form>
//     </>
//   )
// }
// export default ControlledValidation;


import React, { useState } from "react";
const ControlledComponent=()=>{
    const[fromError,setFormError]=useState("")
    const[model,setModel]=useState("")

    const modelValidation=(value)=>{
        let err=''
        let Regex=/^Samsung/i
        if(!value){
            err="Please enter model name"
        }
        else if(!Regex.test(value)){
            err='Please enter correct Model'
        }
        return err
    }
    const enterHnadler=(e)=>{
        e.preventDefault()
        const enteredModel=e.target.value
        setModel(enteredModel)
        const error=modelValidation(enteredModel)
        if(error){
            setFormError(error)
        }
        else{
            setFormError("")
        }
    }
    const ranjith=(e)=>{
        e.preventDefault()
        if(fromError){
            alert("please fill properly")
        }
    }
    return(
    <>
    <form onSubmit={ranjith}>
  <div className="form-group">
    <label htmlFor="text">Enter Model Name:</label>
    <input type="text" className="form-control" id="email" onChange={enterHnadler} value={model}/>
    <p style={{color:"red"}}>{fromError}</p>
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

    </>)
}
export default ControlledComponent;