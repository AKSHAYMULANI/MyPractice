import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../context/ContextProvider"



export function Navbar(){

    
    const context = useContext(AuthContext)
    const {isAuth, ToggleAuth} = context
    const [btnText,setBtnText] = useState('Login')

    useEffect(()=>{
        setBtnText(isAuth?'Logout':'Login')
    },[isAuth])


    return(
        <div>
            
            <button onClick={ToggleAuth}>{btnText}</button>
        </div>
    )
}