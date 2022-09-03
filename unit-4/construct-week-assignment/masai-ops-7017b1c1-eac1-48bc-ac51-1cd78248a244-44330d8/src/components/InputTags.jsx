import { useState } from 'react';
import Card from './Card';
const InputTags=()=>{
    const [Data,setData] = useState([])
    const [Name, setName] = useState('')  
    const [Height,setHeight] = useState(0)
    const [Weight,setWeight] = useState(0)
    const [Power,setPower] = useState(0)

    const [mainData, setMainData] = useState([])

    function AddSuperHero(e){
        e.preventDefault() 
        setData([...Data,{'Name': Name, "Height": Height, "Weight": Weight, "Power": Power}])
        setMainData([...Data,{'Name': Name, "Height": Height, "Weight": Weight, "Power": Power}])
    }
   

    
   
    function findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
           
            if(Number(array[i][attr]) === Number(value)) {
                return i;
            }
        }
        return -1;
    }

    
    function MostPower(Data){
        console.log(Data);
        var MaxPower=(Math.max(...Data.map(o => Number(o.Power))));
 
       
      var cc =    findWithAttr(Data, 'Power', MaxPower)
      setMainData([Data[cc]]); 
    }

    function ShowAll(){
        setMainData(Data)
    }

    return(
        <>
        <form onSubmit={(e)=>AddSuperHero(e)} style={{"display":"grid", "width": "50%", "margin":"90px auto 10px auto"}}>
            <input data-testid="input-name" onChange={(e)=>setName(e.target.value)} placeholder='Enter Superhero name.' type="text"/>
            <input data-testid="input-height" onChange={(e)=>setHeight(e.target.value)} placeholder='Enter Height in cms' type="text"/>
            <input data-testid="input-weight" onChange={(e)=>setWeight(e.target.value)} placeholder='Enter Weight in kg' type="text"/>
            <input data-testid="input-power" onChange={(e)=>setPower(e.target.value)} placeholder='Power Level?' type="text"/> 
            <button data-testid="add-button" disabled={Name==="" && Height===0 && Weight===0 && Power===0} type='submit'>Add SuperHero</button>
        </form>

        <button onClick={()=>MostPower(Data)} data-testid="most-powerfull">Most Powerful Superhero</button>
        {Data.length>1 && <button onClick={ShowAll} data-testid="all-superheroes">Show All</button>}
        <Card data={mainData}/>
        </>
    )
    }

export default InputTags;
