import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Menupage from '../Home/menupage';
function sidebar() {
  return (  
    <>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li>
                    <i className="fa fa-envelope"></i> Vantrungchau2k@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div className="header__top__right__auth">
                  <Link to="/Login">
                    <i className="fa fa-user"></i> Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <Link to="/" className="logo">
              V-Shop
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
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
          {/* <li>
          <Link to="/">Blog</Link>
          </li> */}
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
             
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-heart"></i> <span>1</span>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </Link>
              </li>
            </ul>
            <div className="header__cart__price">
              Sản Phẩm: <span>$150.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="humberger__open">
        <i className="fa fa-bars"></i>
      </div>
    </div>
      </>
  )
}

export default sidebar

  

