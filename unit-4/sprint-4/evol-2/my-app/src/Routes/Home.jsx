import { Link } from "react-router-dom"


function HomePage(){
    return (
        <div>
            <Link to={"/login"}>
            <h1>Login</h1>
            </Link>
            <Link to={"/dashboard"}>
            <h1>DashBoard</h1>
            </Link>
            
        </div>
    )
}

export default HomePage