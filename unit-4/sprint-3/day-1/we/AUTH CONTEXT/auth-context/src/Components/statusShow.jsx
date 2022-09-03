import { useContext } from "react"
import { AuthContext } from "../context/ContextProvider"


export function StatusShow(){
    const context = useContext(AuthContext)
    const {isAuth} = context


    return(
        <div>
            {isAuth? 'Logged In':'Please Login'}
        </div>
    )
}