import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Components/PrivateRoutes"
import DashBoard from "./Dashboard"
import HomePage from "./Home"
import Login from "./Login"


function AllRoutes(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<PrivateRoute> <DashBoard /> </PrivateRoute>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default AllRoutes