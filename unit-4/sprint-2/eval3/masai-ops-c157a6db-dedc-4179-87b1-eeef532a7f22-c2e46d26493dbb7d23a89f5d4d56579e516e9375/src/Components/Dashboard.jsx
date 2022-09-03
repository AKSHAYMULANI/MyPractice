import React, { useEffect, useState } from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {
 
  const [data, setData] = useState([]);
  const [Top,setTop] = useState(true);
 


  function getData(page){
      return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}`).then((res)=>res.json())
  }

  const fetchData = async () => {
    try {
      const res = await Promise.all([
        getData(1),
        getData(2),
        getData(3),
        getData(4),
        getData(5),
        getData(6),
        getData(7)
      ]);
      const data = (res.map((res)=> res.data));
      setData((data.flat()).sort((a, b) => Number(b.salary) - Number(a.salary)))
    } catch(err){
      console.log(err)
    }
  };

  useEffect(()=>{ 
    fetchData()
    topSort()
  },[])
  
  console.log(data)

  function topSort(){
    if(Top){
      data.sort((a, b) => Number(b.salary) - Number(a.salary))
    }
    else{
      data.sort((a, b) =>  Number(a.salary) - Number(b.salary))
    }
    setTop(!Top)
  }

    let j = 0
  return (
    <div>
      <button onClick={()=>topSort()}
        data-testid="sorting-btn"
      >
        {Top?"Top 10 Employees" : "Bottom 10 Employees"}
      </button>

      
        {data && data.map((item)=>{
            j++
            if(j<=10){
              return (
                
                <div key={item.id} data-testid="employee-data">
                <EmployeeName data={item.name} />
                <EmployeeSalary data={item.salary} />
                </div>   
              )
        }
        })}
        
    
      
    </div>
  );
};
