import React from 'react'
import "./Video.css";
import {useNavigate} from "react-router-dom"
import { useRef } from 'react'
const UseRefPalyer = () => {
    const naviaget = useNavigate()
    const goToHome =()=>{
        naviaget("/")
    }
    const videoRef = useRef()
    const handleplay = ()=>{
        videoRef.current.play()
    }
    const handlePause = ()=>{
        videoRef.current.pause()
    }
  return (
    <>
     <div className='grid'>
        <button onClick={handleplay} className="btn1">Play</button>
        <button onClick={handlePause} className="btn2" >Pause</button>
    </div>
    <div className='gridVideo'>
        <video width="520" height ="240" ref={videoRef}>
            <source src='Videos/Pexels Videos 2278095.mp4' />
        </video>
        
    </div>
    <div className='grid'>
    <button onClick={goToHome} className="btn2" >Go Back</button>
    </div>
    </>
   
  )
}

export default UseRefPalyer