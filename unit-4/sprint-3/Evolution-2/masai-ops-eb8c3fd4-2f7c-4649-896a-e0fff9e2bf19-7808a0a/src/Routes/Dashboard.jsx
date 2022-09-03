import React, { useContext, useEffect, useState } from 'react'
import Pagination from '../Components/Pagination';
import RestaurantTable from '../Components/RestaurantTable';
import { AppContext } from '../Context/AppContext';

const getList = (page) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`).then((res)=> res.json())
}

function Dashboard() {
  const {logoutUser,token} = useContext(AppContext)
  const [data, setData] = useState([])
  const [page,setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    getList(page).then((res)=>{
      setData(res.data);
      setTotalPage(res.totalPages)
    }).catch((err) => {console.log(err);})
    
  },[page])

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} data-testid="logout-btn">Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RestaurantTable data={data} />
      </div>
      <div data-testid="pagination-container"><Pagination currentPage={page} totalPages={totalPage} handlePageChange={(value)=>setPage(value)} /></div>
    </div>
  );
}

export default Dashboard;
