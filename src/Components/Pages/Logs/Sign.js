import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Sign = ({ setUser }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setconPassword] = useState("");

  const [alerts, setUserAlert] = useState({
    render: false,
    type: "",
    message: "",
  });
  const navigate = useNavigate();
  const submitBtn = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alertsset(true, "error", "All fields are required");
      return;
    } else {
      if (!password || !conpassword) {
        alertsset(true, "error", "All fields are required");
        return;
      } else {
        if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          alertsset(true, "error", "Enter a valid email");
          return;
        } else {
          if (!password.match(/^[A-Za-z]\w{7,14}$/)) {
            alertsset(true, "error", "Enter a Unique Password");
            return;
          } else {
            if (password !== conpassword) {
              alertsset(
                true,
                "error",
                "Confirm password must be same"
              );
            } else {
              setUser({name});
              navigate("/");
              setname("");
              setemail("")
              setPassword("");
              setconPassword('')
            }
          }
        }
      }
    }
  };

  const alertsset = (render = false, type = "", message = "") => {
    setUserAlert({ render, type, message });
  };
  return (
    <section style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'80vh'
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
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your email here"
            id="email"
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
        <div className="email">
          <label htmlFor="conpassword">Confirm Password</label>
          <input
            value={conpassword}
            onChange={(e) => setconPassword(e.target.value)}
            type="password"
            placeholder="Confirm Your Password "
            id="conpassword"
            className="input"
          />
        </div>
        <button className="button" onClick={submitBtn}>Submit </button>
        <p className="forgotten">Already have an accout <NavLink to='/login' style={{
          color:'blue'
        }}>Login Here</NavLink></p>
      </div>
    </section>
  );
};

export default Sign;
