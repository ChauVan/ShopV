import React from "react";
import { Link, NavLink } from "react-router-dom";
import Menupage from "../Component/menupage";
import Category from "./category";
import Hero from "./hero";
import Products from "../Component/mainpages/products/products";
import Blog from "./blog";
function header() {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <Link to="/" class="logo">
              V-Shop
            </Link>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
            
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/">Shop</Link>
          </li>
          <li>
          <Link to="/">Pages</Link>
         <Menupage/>
          </li>
          <li>
          <Link to="/">Blog</Link>
          </li>
          <li>
          <Link to="/">Comtact</Link>
          </li>
        </ul>
             
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <Link to="/">
                  <i class="fa fa-heart"></i> <span>1</span>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i class="fa fa-shopping-bag"></i> <span>3</span>
                </Link>
              </li>
            </ul>
            <div class="header__cart__price">
              Sản Phẩm: <span>$150.000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
    <Hero/>
    <Category/>
    <Products/>
    {/* <Blog/> */}
    </>
  );
}

export default header;
