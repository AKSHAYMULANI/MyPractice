import { useState } from "react"
import AddTasks from "./AddTask"

function getData(){
    return fetch("http://localhost:3004/posts").then(res=>{
        return res.json()
    })
}

function  AddTaskApi(title){
   return fetch("http://localhost:3004/posts",
   {method: "POST",
   body: JSON.stringify({
    title: title,
    body: "bar",
    userId: 1
}),
headers: {
    "Content-type": "application/json; charset=UTF-8"
} }).then(res=>{
    return res.json()
})
}

function Posts(){
    const [posts, setPosts] = useState([])

    const handleFetchData = async () =>{
        try{
            const data = await getData()
            setPosts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    return (
    
    <div>
        <h3>Posts</h3>
        <AddTasks AddTaskApi={AddTaskApi} handleFetchData={handleFetchData} />
        <button onClick={handleFetchData}>GET POSTS</button>
        <ul>
            {posts.map((item)=><li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
    
    )
}

export default Posts