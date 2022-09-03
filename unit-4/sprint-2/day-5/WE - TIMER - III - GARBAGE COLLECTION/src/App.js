
import { useState } from "react";
import TimerCounterCleanup from "./components/TimerCounterCleanup";
import "./styles.css";

export default function App() {
  const [show,setShow]=useState(true)
//use for toggling to show or not show our UI
  return (
    <div className="App">
      {/* conditionnal rendering */}
      {show && <TimerCounterCleanup/>}
      <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  );
}
