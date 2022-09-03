import { useEffect, useState } from "react";

export default function TimerCounterCleanup() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const idName=setInterval(() => {
      console.log(`setinterval`,Date.now()) //just for checking
      setCount((prev) => prev + 1);
    }, 1000);

     const cleanup=()=>{
       clearInterval(idName);
     };
     return cleanup; //clanup is use for after toggling to stop our setInteranl operation
  }, []);
  //don't take count in this empty array
  //console.log(count)
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <h3>update every second</h3>
    </div>
  );
}
