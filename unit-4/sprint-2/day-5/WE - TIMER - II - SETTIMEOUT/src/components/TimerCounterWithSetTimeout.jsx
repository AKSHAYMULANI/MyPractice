import { useEffect, useState } from "react";
export default function TimerCountSetTimeout() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <h3>update every second</h3>
    </div>
  );
}
//Remove StrictMode in app.js
