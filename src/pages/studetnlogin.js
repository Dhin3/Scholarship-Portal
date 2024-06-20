import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUserName]=useState('');
  const [password, setPassword]=useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    if(username === "Dhine@gmail.com" || username === "san@gmail.com" && password === "123") {
      // Redirect to the new home page
      navigate("/new-home");
    } else {
      // If authentication fails, you can show an error message or handle it accordingly
      alert("Authentication failed");
    }
  };

  return (
    <div className='login-body'>
      <center>
        <div className="login-wrapper">
          <form method="post" action="http://localhost:3000/" onSubmit={handleSubmit} className="login-form">
            <h2>Login to access your student account</h2>
            <div className="input-field">
            <input name='username' type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your email" required />


              <label>Enter your email</label>
            </div>
            <div className="input-field">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
              <label>Enter your password</label>  
            </div>
            <div className="forget">
              <label htmlFor="remember" className="remember">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" style={{color:'inherit',textDecoration:'none'}}>Forgot password?</a>
            </div>
            <button type="submit" className="btn">
              Log In
            </button>
            <div className="register">
              <p>Don't have an account? <a  href="/student-reg" style={{color:'inherit',textDecoration:'none'}}>Register</a></p>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};

export default LoginForm;

// import {useContext, useState} from "react";
// import {Navigate} from "react-router-dom";
// import {UserContext} from "../UserContext";

// export default function LoginPage() {
//   const [username,setUserName] = useState('');
//   const [password,setPassword] = useState('');
//   const [redirect,setRedirect] = useState(false);
//   const {setUserInfo} = useContext(UserContext);
//   async function login(ev) {
//     ev.preventDefault();
//     const response = await fetch('http://localhost:4000/login', {
//       method: 'POST',
//       body: JSON.stringify({username, password}),
//       headers: {'Content-Type':'application/json'},
//       credentials: 'include',
//     });
//     if (response.ok) {
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//         setRedirect(true);
//       });
//     } else {
//       alert('wrong credentials');
//     }
//   }

//   if (redirect) {
//     return <Navigate to={'/'} />
//   }
//   return (
//     <form className="login" onSubmit={login} style={{background:'#000'}}>
//                 <h2>Login to access your student account</h2>
//             <div className="input-field">
//             <input name='username' type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your email" required />


//               <label>Enter your email</label>
//             </div>
//             <div className="input-field">
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
//               <label>Enter your password</label>  
//             </div>
//             <div className="forget">
//               <label htmlFor="remember" className="remember">
//                 <input type="checkbox" id="remember" />
//                 <span>Remember me</span>
//               </label>
//               <a href="#" style={{color:'inherit',textDecoration:'none'}}>Forgot password?</a>
//             </div>
//             <button type="submit" className="btn">
//               Log In
//             </button>
//             <div className="register">
//               <p>Don't have an account? <a  href="/student-reg" style={{color:'inherit',textDecoration:'none'}}>Register</a></p>
//             </div>
//     </form>
//   );
// }