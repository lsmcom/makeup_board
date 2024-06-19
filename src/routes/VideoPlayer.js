import React, { useRef, useState } from 'react'
import myVideo from '../assets/213814_tiny.mp4'
import tempImg from '../assets/7983711.png'

// 영상 포맷이 여러개 있어야 함 

/// localhost:3000/video
const VideoPlayer = () => {
 const [toggle, setToggle ] = useState(false);
 const videoRef = useRef();  // const v = document.querySelector('video')
 console.log(videoRef) // { current : video }

 const onPlay = ()=>{
    videoRef.current.play()
 }
 const onStop = ()=>{
    videoRef.current.pause()
 }

 const onToggle = ()=>{
    setToggle(!toggle)

    !toggle ?  videoRef.current.play() :  videoRef.current.pause()
    // if( toggle ){
    //     videoRef.current.play()
    // }else{
    //     videoRef.current.pause()
    // }
 }

  return (
    <div>
        <h1>VideoPlayer</h1>
        {/* <video autoplay muted={true} width="500px"  poster={tempImg}> */}
        <video 
            ref={videoRef}
            muted 
            onMouseOver={onToggle}
            onMouseOut={onToggle}
            width="500px"  
            controls
        >
            <source src={ myVideo }  type="video/mp4"   />
            {/* <source src={ myVideoOgg } type="video/ogg" />
            <source src={ myVideoWebm } type="video/webm" /> */}
        </video>

        <button onClick={ onPlay }> play </button>
        <button onClick={ onStop }> stop </button>
    </div>
  )
}

export default VideoPlayer