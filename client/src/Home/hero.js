import React from "react";

function hero() {
  return (
    <div>
      <section class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="hero__categories">
                <div class="hero__categories__all">
                  <i class="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="#">Iphone</a>
                  </li>
                  <li>
                    <a href="#">SamSung</a>
                  </li>
                  <li>
                    <a href="#">Xiaomi</a>
                  </li>
                  <li>
                    <a href="#">Oppo</a>
                  </li>
                  <li>
                    <a href="#">Vivo</a>
                  </li>
                  <li>
                    <a href="#">Realme</a>
                  </li>
                  <li>
                    <a href="#">Nokia</a>
                  </li>
                  <li>
                    <a href="#">Itel</a>
                  </li>
                  <li>
                    <a href="#">Masstel</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#">
                    <div class="hero__search__categories">
                      Bạn tìm gì ?<span class="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" class="site-btn">
                      Tìm
                    </button>
                  </form>
                </div>
                <div class="hero__search__phone">
                  <div class="hero__search__phone__icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <div class="hero__search__phone__text">
                    <h5>0375054346</h5>
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
              </div>
              <img src="assets/img/hero/banner.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default hero;
