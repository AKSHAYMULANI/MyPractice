import  { useEffect,useState } from "react"
function TodoWithPagination(){
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const getTodosFunc=async (pass_page=1)=>{
            try{
                setLoading(true)
                let data=await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${pass_page}&_limit=10`)
                data=await  data.json()
               //console.log(data)
               setData(data)
               setLoading(false)
            }catch(err){
                console.log(err)
            }
    }
   useEffect(()=>{
        getTodosFunc(page)
    },[page]);
console.log(page)
    return (
        <div>
            <h1>Comments of pagination</h1>
            <button onClick={()=>setPage(page=>page-1)} disabled={page==1}>PREV</button>
            <span style={{padding:"5px"}}>{page}</span>
            <button onClick={()=>setPage(page=>page+1)}>NEXT</button>
            <div>
                {loading&& <h3>.....Loading</h3>}
            </div>
            <div style={{border:"1px solid red",width:"70%",margin:"auto"}}>
                {data.map((el)=>(
                    <div className="boxes" key={el.id}>
                        <div>{el.id}</div>
                        <div>{el.name}</div>
                        <div>{el.email}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TodoWithPagination