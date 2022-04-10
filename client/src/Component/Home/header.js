import React from "react";
import Category from "./category";
import Hero from "./hero";
import Products from "../mainpages/products/products";
// import Listproduct from "../../APi/listproduc";
function header() {
  return (
    <>
    
    <Hero/>
    <Category/>
    <Products/>
  
    {/* <Blog/> */}
    </>
  );
}

export default header;
