import "./App.css";
// import data from db.json
import UserDetail from './db.json'
import UserDetails from "./components/UserDetails";
import { useState } from "react";



function App() {
 
  const [data, setData] = useState(UserDetail)

  const Descending = ()=>{
    let deSorted = data.sort(function(a,b){
      if(a.first_name<b.first_name){
        return 1;
      }
      if(a.first_name>b.first_name){
        return -1;
      }
      return 0
    })
    setData((item)=> [...deSorted])
    
  }

  const Ascending = ()=>{
     setData((item) => [...item.sort(function(a,b){
      if(a.first_name>b.first_name){
        return 1;
      }
      if(a.first_name<b.first_name){
        return -1;
      }
      return 0
    })])

  }


  return (
    <div className="App" data-testid = 'app'>
      <button onClick={Ascending}  data-testid = 'sort-asc-btn'>Sort by Asc</button>
      <button onClick={Descending}  data-testid = 'sort-desc-btn'>Sort by Desc</button>
       {/* map through the users data and pass props to the Userdetails component */}
      { data.map((item) => {
        return (<UserDetails 
          key={item.id} 
          avatar={item.avatar}
          firstName={item.first_name}
          lastName={item.last_name}
          karma={item.karma}
          followers={item.followers}
          posts={item.posts}
          address={item.address}
          isFollow={item.is_following} />)
      }) }
    </div>
  );
}

export default App;
