
import './App.css';
import { useRef } from "react";

function App() {

  const Ref = useRef(null);

  function OnFocus() {
    Ref.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <h1>Input Focus</h1>
      <input ref={Ref} placeholder="Enter Name" />
      <button onClick={OnFocus}>Focus</button>
    </div>
      </header>
    </div>
  );
}

export default App;
