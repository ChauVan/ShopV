import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menupage from "../Home/menupage"
import Category from "./category";
import Hero from "./hero";
import Products from "../mainpages/products/products";
import Blog from "./blog";
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
