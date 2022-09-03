import { Route, Routes } from "react-router";
import HomePage from "./Homepage";

function Allroutes(){
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default Allroutes