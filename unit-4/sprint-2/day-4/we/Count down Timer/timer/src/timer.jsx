const { useState, useRef, useEffect } = require("react");

const fixTime = (time) => (time < 10 ? "0" + time : time);

const formatTimeToString = (time) => {
  const seconds = time % 60;
  const min = Math.floor(time / 60) % 60;
  return `00:${fixTime(min)}:${fixTime(seconds)}`;
};

function Timer() {
 
  const [time, setTime] = useState(0);

  const ref = useRef(null);

  const startTimer = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTime((time) => time===0?time : time - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);



  return (
    <div>
      <h1>{formatTimeToString(time)}</h1>
      <input onChange={(e)=>  setTime(e.target.value)} value={time} placeholder='Enter Time' />
      <br />
      <br />
      <button onClick={startTimer}>START</button>
      <button onClick={stopTimer}>STOP</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}

export default Timer;
