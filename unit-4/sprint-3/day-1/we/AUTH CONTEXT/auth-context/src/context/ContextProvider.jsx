import { createContext } from "react";
import { useState } from "react";



export const AuthContext = createContext()

function AppContextProviderComponents(props){
    const [isAuth, setIsAuth] = useState(false)

    const ToggleAuth = () => 
    setIsAuth(isAuth===true?false:true)

return(
    <AuthContext.Provider value={{isAuth: isAuth, ToggleAuth: ToggleAuth}}>
        {props.children}
    </AuthContext.Provider>
    )
}

export default AppContextProviderComponents