import Slide from "./Components/Slide";
import "./styles.css";
import React, { useState } from "react"



// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];



export default function App() {

  const [id,setId] = useState(1)

  function Next(){
    setId(id + 1)
  }

  function Previous(){
    
    setId(id - 1)
  }

  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide id={id} data={data}/>
      <button disabled={id == 1} onClick={Previous} data-testid="prev">Prev</button>
      <button disabled={id == data.length} onClick={Next} data-testid="next">Next</button>
    </div>
  );
}
