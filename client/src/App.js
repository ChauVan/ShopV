import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Login from "../src/Component/mainpages/auth/Login"
import Register from "../src/Component/mainpages/auth/Register"
function App() {
 
    return (
      <>

<BrowserRouter>
         <Routes>
                 <Route path="/" element = {<Home />} />
                 <Route path="Login/*" element= {<Login />}/>
                 <Route path="register/*" element={<Register />} />
         </Routes>      
        </BrowserRouter>
      
      </>
        
      
    );
  }


export default App;
