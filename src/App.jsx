import { useState } from "react";
import './App.css'
import logo from './assets/instagram.png'

function App(){
const [login,setlogin]=useState(true);

const loginSwitch=()=>{
  setlogin(!login)
}
return(
  <div className="Container">
    <div className="user">
    <img src={logo} alt="" />
      <input hidden={login} type="text" placeholder="Mobile Number or Email"/>
      <input hidden={login} type="text" placeholder="Full name" />
      <input type="text" placeholder="Phone number, username, or email" />
      <input type="text" placeholder="Password" />
      <button>{login ? "Sign in": "Sign up"}</button>
      <div id="footer">
        {login ?"Don't have an account ?":" Have an account ?"}
        <span onClick={loginSwitch}>{login ? "Sign up": " Log in"}</span>
      </div>
    </div>
  </div>
)
}
export default App