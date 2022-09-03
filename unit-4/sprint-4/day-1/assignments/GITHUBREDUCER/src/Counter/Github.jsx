import { useReducer, useState } from "react";



export function Github(){

  function getUSers(Value){
    var state
    fetch(`https://api.instantwebtools.net/v1/airlines?query=${Value}`)
    .then(state = 'Success')
    .catch((err) => state = err)

    return state
  }

  const [Value, setValue] = useState('');
  const [state, dispatch] = useReducer(getUSers,'None');
  

  return <div>

      <input onChange={(e)=>setValue(e.target.value)} value={Value} />
      <button onClick={()=>dispatch(Value)}>SEARCH</button>
      <h1>Status: {state} </h1>
   </div>
}