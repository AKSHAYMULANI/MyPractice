import axios from "axios"
import { useContext } from "react"
import { AppContext } from "./AppContext"


export function LoginRequest(email,password){
    const {setIsLoading} = useContext(AppContext)
    setIsLoading(true)
    axios.post("https://reqres.in/api/login", {
          "email": email,
          "password": password
         })
}

export function LoginSuccess(res){

    const {setIsAuth,setToken,setIsLoading} = useContext(AppContext)
   
    setToken(res.token)
    setIsLoading(false)
    setIsAuth(true)

}

export function LoginFailure(err){
    const {setIsAuth,setIsLoading,setIsError} = useContext(AppContext)

    setIsAuth(false)
    setIsLoading(false)
    setIsError(err)
    console.log(err)
}

export function GetProductsRequest(page){
    const {setIsLoading} = useContext(AppContext)
    setIsLoading(true)
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`)
}

export function GetProductsSuccess(res){
    const {setData,setIsLoading} = useContext(AppContext)
    setIsLoading(false)
    setData(res.data)
}

export function GetProductFailure(err){
    const {setIsLoading,setIsError} = useContext(AppContext)
    setIsLoading(false)
    setIsError(err)
    console.log(err)
}