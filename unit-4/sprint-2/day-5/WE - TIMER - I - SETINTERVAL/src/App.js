import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const startTimer = () => {
    //closures
    //setInterval(callback,timedelay)
    setInterval(() => {
      console.log(`value of count:${count}`);
      setCount((prev) => prev + 1);
    }, 1000);
  };
  useEffect(() => {
    startTimer();
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
