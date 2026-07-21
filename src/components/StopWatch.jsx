import { useEffect, useState } from "react";

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

