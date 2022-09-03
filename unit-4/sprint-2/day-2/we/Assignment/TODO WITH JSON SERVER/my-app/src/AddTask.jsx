import { useState } from "react"


function AddTasks({AddTaskApi,handleFetchData}){

    const [inputv, setInputv] = useState("")

    function addtasktodo(){
        
        AddTaskApi(inputv)
        handleFetchData()
        
    }

    return (
        <div>
            <input type="text" onChange={(e)=>setInputv(e.target.value)} value={inputv}/>
            <button onClick={()=>addtasktodo()}>Add Task</button>
        </div>
    )
}

export default AddTasks