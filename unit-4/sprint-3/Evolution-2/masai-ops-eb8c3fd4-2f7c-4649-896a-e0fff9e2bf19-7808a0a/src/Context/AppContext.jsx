import { createContext, useState } from "react";


export const AppContext = createContext()

function AppContextProvider({children}) {

    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);

    const loginUser = (token) => {
        setToken(token)
        setIsAuth(true)
    }

    const logoutUser =() =>{ 
        setToken(null)
        setIsAuth(false)
    }

    return (
        <AppContext.Provider value={{isAuth,loginUser,logoutUser,token }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
