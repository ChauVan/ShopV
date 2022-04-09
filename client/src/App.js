import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/home";
import Login from "../src/Component/mainpages/auth/Login"
import Register from "../src/Component/mainpages/auth/Register"
import Cart from "../src/Component/mainpages/cart/cart"
import Contact from "./Component/mainpages/contact/contact";
import Detailproduct from "./Component/mainpages/products/detailproduct";
function App() {
 
    return (
      <>

<BrowserRouter>
         <Routes>
                 <Route path="/" element = {<Home />} />
                 <Route path="Login/*" element= {<Login />}/>
                 <Route path="Register/*" element={<Register />} />
                 <Route path="Cart/*" element={<Cart />} />
                 <Route path="Contact/*" element={<Contact />} />
                 <Route path="Detailproduct/*" element={<Detailproduct />} />

               
         </Routes>      
        </BrowserRouter>
      
      </>
        
      
    );
  }


export default App;
