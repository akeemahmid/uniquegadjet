import {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "./Alert";


const Login = ({ setUser }) => {
    const [name, setname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [alerts, setUserAlert] = useState({
        render: false,
        type: "",
        message: "",
      });
    const submitBtn = (e)=>{
        e.preventDefault()
        if(!password || !name){
            alertsset(
                true,
                "error",
                "All fields are Required"
              );
              return
        }
        else{
            if (!password.match(/^[A-Za-z]\w{7,14}$/)){
                alertsset(
                    true,
                    "error",
                    "Enter A Unique Password"
                  );  
            }
            else{
                setUser({name});
              navigate("/");
              setname('')
              setPassword('')
            }
        }
    }
    const alertsset = (render = false, type = "", message = "") => {
        setUserAlert({ render, type, message });
      };
  return (
    <section  style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'70vh'
    }}>
    <div className="form">
      {/* <input type='text' placeholder='enter your name here' value={name} onChange={(e)=> setname(e.target.value)}/>
      <input type='email' placeholder='enter your email here' value={email} onChange={(e)=> setemail(e.target.value)}/>
      <button onClick={submitBtn}>Submit Me</button> */}
      <div className="name">
      {alerts.render && <Alert {...alerts} removeAlert={alertsset} />}
        <label htmlFor="name">Username</label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your Username here"
          className="input"
        />
      </div>
    
      <div className="email">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password here"
          id="password"
          className="input"
        />
      </div>
 
      <button className='button' onClick={submitBtn}>Submit </button>
      <p className="forgotten">Don't have an accout <NavLink to='/sign' style={{
        color:'blue'
      }}>Sign Up</NavLink></p>
    </div>
  </section>
  )
}

export default Login