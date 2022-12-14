import { useState } from "react"

function getData(){
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
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

    console.log(posts)

    return (
    
    <div>
        <h3>Posts</h3>
        <button onClick={handleFetchData}>GET POSTS</button>
        <ul>
            {posts.map((item)=><li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
    
    )
}

export default Posts