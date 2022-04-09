import React from "react";

function hero() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
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
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      Bạn tìm gì ?<span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      Tìm
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
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
