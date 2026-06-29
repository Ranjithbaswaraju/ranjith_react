// import React, { useState } from "react";

import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";


// const ProfileHidden=()=>{
//   const[name,setName]=useState('')

//   return(
//     <>
//     <div>
//       <input type="text"
//       value={name}
//       onChange={(e)=>setName(e.target.value)}
//       />

//       {name==="varshitha" ?<h3>Welcome {name}</h3>:<h3>Please enter the correct name</h3>}
//     </div>

//     </>
//   )

// }
// export default ProfileHidden;

// import React, { Component } from "react";

// class ProfileHidden extends Component{
//   constructor(props){
//     super(props)

//     this.state={
//       users:[]
//     }
//   }

//   componentDidMount(){
//     fetch('https://fakestoreapi.com/products')
//     .then((res)=>res.json())
//     .then((data)=>this.setState({users:data}))
//     .catch((err)=>console.log(err))
//   }

//   render(){
//     const {users}=this.state

//     return(
//       <>
//       <h2>Fake Store Api</h2>
//       <table border="1">
//       <thead>
//         <tr>

//           <th>Title</th>
//           <th>price</th>
//           <th>Image</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           users.map((data,id)=>{
//            return(
//              <tr key={id}>
//               <td>{data.title}</td>
//               <td>{data.price}</td>

//               <td><img src={data.image} width="50px"/></td>
//             </tr>
//            )
//           })
//         }
//       </tbody>
//       </table>
//       </>
//     )
//   }

// }
// export default ProfileHidden;

// const KeysComponent = () => {
// const users=[
//     {id:1,name:"ranjith"},
//     {id:2,name:'rajesh'},
//     {id:3,name:"kamal"}
// ]

// return(
//     // <>
//     // <ul>
//     //     {
//     //     users.map((item,id)=>{
//     //         return(
//     //             <li key={id}>
//     //                 <li>{item.id}{item.name}</li>

//     //             </li>

//     //         )
//     //     })
//     //     }
//     //     </ul>
//     // </>
//     <>
//     <table border="1">
//         <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 users.map((item,id)=>{
//                     return(
//                         <tr key={id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                         </tr>
//                     )
//                 })
//             }
//         </tbody>
//     </table>

//     </>
// )
// }
// export default KeysComponent

// import React from "react";
// const Timer = () => {
//   const [time, setTime] = useState(0);
//   const [running, setRunning] = useState(false);
//   useEffect(() => {
//     let intervalId;
//     if (running) {
//       intervalId = setInterval(() => {
//         setTime((time) => time + 1);
//       }, 1000);
//     }
//     return () => clearInterval(intervalId);
//   }, [running]);
//   const Resethandler = () => {
//     setTime(0);
//     setRunning(false)
//   };
//   return (
//     <>
//       <p>{time} sec</p>
//       <button onClick={() => setRunning(true)}>Start</button>
//       <button onClick={() => setRunning(false)}>Stop</button>
//       <button onClick={Resethandler}> Reset</button>
//     </>
//   );
// };
// export default Timer;

// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [time, setTime] = useState(0);
//   const [run, setRun] = useState(false);

//   useEffect(() => {
//     let intervalId;

//     if (run) {
//       intervalId = setInterval(() => {
//         setTime(prev => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(intervalId);
//   }, [run]);

//   // ⏱️ Convert seconds to HH:MM:SS
//   const hours = Math.floor(time / 3600);
//   const minutes = Math.floor((time % 3600) / 60);
//   const seconds = time % 60;

//   return (
//     <>
//       <h2>
//         {String(hours).padStart(2, "0")} :
//         {String(minutes).padStart(2, "0")} :
//         {String(seconds).padStart(2, "0")}
//       </h2>

//       <button onClick={() => setRun(true)}>Start</button>
//       <button onClick={() => setRun(false)}>Stop</button>
//       <button onClick={() => {
//         setTime(0);
//         setRun(false);
//       }}>
//         Reset
//       </button>
//     </>
//   );
// };

// export default Timer;




// const Timer=()=>{
//     const[run,setRun]=useState(false)
//     const[time,setTime]=useState(0)

//     useEffect(()=>{
//         let intervalId;

//         if(run){
//             intervalId=setInterval(()=>{
//                 setTime(prev=>prev+1)
//             },1000)
//         }
//         return ()=>clearInterval(intervalId)
//     },[run])

//     const hours=Math.floor(time/3600)
//     const minutes=Math.floor((time%3600)/60)
//     const seconds=time%60

//     return(
//         <>
//         <h1>Stop Watch</h1>
//         <p>
//             {String(hours).padStart(2, "0")}  :
//             {String(minutes).padStart(2, "0")} :
//             {String(seconds).padStart(2,"0")}
//         </p>
//         <button onClick={()=>setRun(true)}>Start</button>
//         <button onClick={()=>setRun(false)}>Stop</button>
//         <button onClick={()=>{
//             setTime(0)
//             setRun(false)
//         }}>Reset</button>
        
//         </>
//     )

// }
// export default Timer;

const Timer=()=>{
    const[run,setRun]=useState(false)
    const[time,setTime]=useState(0)

    useEffect(()=>{
        let intervalId;

        if(run){
            intervalId=setInterval(()=>{
                setTime((prev=>prev+1))
            },1000)
        }
        return ()=>clearInterval(intervalId)
    },[run])

    const hours=Math.floor(time/3600)
    const minutes=Math.floor((time%3600)/60)
    const seconds=time%60

    return(
        <>

        <p>
            {String(hours).padStart(2,"0")}:
            {String(minutes).padStart(2,"0")}:
            {String(seconds).padStart(2,"0")}

        </p>
        <button onClick={()=>setRun(true)}>Start</button>
        <button onClick={()=>setRun(false)}>Stop</button>
        <button onClick={()=>{
            setRun(false)
            setTime(0)
        }}>Reset</button>
        
        </>
    )


}
export default Timer;