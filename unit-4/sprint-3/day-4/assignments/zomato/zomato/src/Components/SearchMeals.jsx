import { useEffect, useState } from "react"

function getMeals(q){
    return fetch(
        `https://api.github.com/search/users?q=${q}`
      ).then((response) =>{return response.json()})
}

export function SearchMeals(){

    const [Value,setValue] = useState('')
    const [Data,setData] = useState([])

    useEffect(() => {
        getMeals(Value).then((response)=>{setData(response.items)})
      }, [Value]);
 

    
    return <div>
        <input onChange={(e)=>setValue(e.target.value)} value={Value} placeholder={'Enter Meal Name'} />
        
        {Data &&
          Data.map((item)=>(<div>{item.login}</div>))}
    </div>
}