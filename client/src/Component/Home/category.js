import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import { Link } from "react-router-dom";
function category() {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="data:image/jpeg;base64,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"
                >
                  <h5>
                    <Link to="#">Iphone</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="assets/img/categories/cat-2.jpg"
                >
                  <h5>
                    <Link to="#">Samsung</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="assets/img/categories/cat-3.jpg"
                >
                  <h5>
                    <Link to="#">Xiaomi</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="assets/img/categories/cat-4.jpg"
                >
                  <h5>
                    <Link to="#">Vivo</Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="assets/img/categories/cat-5.jpg"
                >
                  <h5>
                    <Link to="#">VSmart</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProduct />
      </section>
    </>
  );
}

export default category;
