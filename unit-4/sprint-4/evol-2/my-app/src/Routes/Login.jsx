import { Input } from "@chakra-ui/react";
import { useContext, useReducer, useState } from "react";
import { AppContext } from "../context/AppContext";
import reducer from "../context/reducer";


function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [state,dispach] = useReducer(reducer,null)

    const {isAuth,token,isLoading} = useContext(AppContext)

    function LoginAuth(e){
        e.preventdefault()
        console.log(isLoading)
        dispach({type:'LOGIN_REQUEST',email:email, password:password}).then((res)=>dispach({type:'LOGIN_SUCCESS', res:res})
            
        ).catch((err)=>dispach({type:'LOGIN_FAILURE', err:err})
        )
    }



    return (
        <div>
            <h1>Login Page</h1>
            {isLoading && <p>...Loading</p>}
            <form onSubmit={(e)=>LoginAuth(e)}>
                <div>  
                <Input onChange={(e)=>setEmail(e.target.value)} value={email} type={"email"} placeholder="Enter Email" />     
                </div>
                <div>
                <Input onChange={(e)=>setPassword(e.target.value)} value={password}  type={"password"} placeholder="Enter Password" />
                </div>
                <div>
                <Input value={"SUBMIT"} type={"submit"} />
                </div>
            
            
           
            </form>
            
        </div>
    )
}

export default Login