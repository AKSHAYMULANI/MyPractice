
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home'
import Login from './Login'


function AllRoutes() {
  return (
    <div>
      <h3> Testing </h3>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      </Routes>
      {/* Routes */}
      {/* Home */}
      {/* Login */}
      {/* Private Route: Dashboard */}
    </div>
  );
}

export default AllRoutes;
