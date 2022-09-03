import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";




function Login() {
 
  const {loginUser, isAuth} = useContext(AppContext)
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
   
  function LoginAuth(e){
    e.preventDefault()
    fetch("https://reqres.in/api/login", {
     
      method: "POST",
      body: JSON.stringify({
        "email": email,
        "password": password
      }),
       
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then((res)=> res.json()).then((res) => {
    console.log(res)
    loginUser(res.token) 
  })
}

  if(isAuth){
    return <Navigate to={"/dashboard"} />
  }

  return (
    <div>
      <form onSubmit={(e)=>LoginAuth(e) } data-testid="login-form">
        <div>
          <label>
            Email
            <input onChange={(e)=>setEmail(e.target.value)} value={email} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password 
            <input
               onChange={(e)=>setPassword(e.target.value)} value={password} 
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
