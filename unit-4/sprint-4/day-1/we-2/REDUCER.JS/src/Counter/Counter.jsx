import { useReducer, useState } from "react";

function reducerLogicToUpdateState(state,action){
  if(action.type==='INCREMENT_COUNT'){
    return state + Number(action.amo)
  }
  if(action.type==='DECRIMENT_COUNT'){
    return state - Number(action.amo)
  }
}

export function Counter() {
  const [amount,setAmount] = useState(0)
  const [state, dispatch] = useReducer( reducerLogicToUpdateState,amount)

  return (
    <div>
      <h1>Counter : {state}</h1>
      <input onChange={(e)=>setAmount(e.target.value)} value={amount} />
      <button onClick={()=> dispatch({type: "INCREMENT_COUNT", amo: amount})}>ADD</button>
      <button onClick={()=> dispatch({type: "DECRIMENT_COUNT", amo: amount})}>REDUCE</button>
     </div>
  );
}
