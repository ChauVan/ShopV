import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'
function Login() {
  // const[(user, setUser)] = useState({
  //   email: "",
  //   password: "",
  // });

  // const onChangeInput = e =>{
  //     const {name,value} = e.target;
  //     setUser({...user,[name]:value})
  // }
  // const loginSubmit = async e =>{
  //   e.preventDefault()
  //   try {
  //     await axios.post('/user/login',{...user})
  //     localStorage.setItem('firstLogin',true)

  //     window.location.href="/";
  //   } catch (error) {
  //     alert(error.response.data.msg)
  //   }
  // }

  return (
    <div className="login-page">
      <form 
      // onSubmit={loginSubmit}
      >
      <h2>Đăng Nhập</h2>

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          // value={user.email} onchange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password" autoComplete="on"
          // value={user.password} onchange={onChangeInput}
        />
        <div className="row">
          <button type="submit">Đăng nhập</button>
          <Link to='/register'>Đăng ký</Link>
          <Link to='/'> Trang Chủ</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
