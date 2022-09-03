import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {

  const videoRef = useRef(null)
  function startVideo(){
    videoRef.current.play();
    console.log('play')
  }

  function pauseVideo(){
    videoRef.current.pause();
  }

  function nextFrame(){
    videoRef.current.seekToNextFrame()
  }

  return (
    <div>
      <video data-testid="video-container" width="400" ref={videoRef} controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button onClick={()=>{startVideo()}}>
          PLAY
        </Button>
        <Button onClick={()=>{pauseVideo()}}>
          PAUSE
        </Button>
        <button onClick={nextFrame}>
          SKIP 30 SECONDS
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
