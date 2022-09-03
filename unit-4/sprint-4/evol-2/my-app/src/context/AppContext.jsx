import { createContext, useState } from "react";



export const AppContext = createContext()

function AppContextProvider({children}){

    const [isAuth, setIsAuth] = useState(true);
    const [token, setToken] = useState(null);
    const [isError,setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data,setData] = useState([])



    return(
        <AppContext.Provider value={{isAuth,token,setIsAuth,setToken,isError,isLoading,data,setIsError,setIsLoading,setData}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider