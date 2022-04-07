import React from 'react'
import { Link, NavLink } from "react-router-dom";
function sidebar() {
  return (  
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="header__top__left">
                <ul>
                  <li>
                    <i class="fa fa-envelope"></i> Vantrungchau2k@gmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="header__top__right">
                <div class="header__top__right__social">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div class="header__top__right__auth">
                  <Link to="/Login">
                    <i class="fa fa-user"></i> Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default sidebar

  

