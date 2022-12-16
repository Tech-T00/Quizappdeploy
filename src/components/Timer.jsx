import React, { useEffect, useState } from 'react'

const Timer = ({setclock, questionNumber}) => {
    const [timer, setTimer]=useState(30)

    useEffect(()=>{
        if (timer===0)return setclock(true)
        const interval=setInterval(()=>{
            setTimer((prev)=> prev - 1)
        },1000)
        return () => clearInterval(interval);
    },[timer, setclock])

    useEffect(()=>{
        setTimer(30)
    },[questionNumber])
  return (
    <div>{timer}</div>
  )
}

export default Timer