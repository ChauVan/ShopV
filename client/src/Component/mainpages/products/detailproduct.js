import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../include/sidebar";
import Footer from "../../include/footer";
function detailproduct() {
  return (
    <>
      <Sidebar />
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhla-1.png"
                    alt=""
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <img
                    data-imgbigurl="https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/24/637574659638759208_iphone-12-dung-luong-64gb-5g.png"
                    src="https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2021/5/24/637574659638759208_iphone-12-dung-luong-64gb-5g.png"
                    alt=""
                  />
                  <img
                    data-imgbigurl="assets/img/product/details/product-details-3.jpg"
                    src="assets/img/product/details/thumb-2.jpg"
                    alt=""
                  />
                  <img
                    data-imgbigurl="assets/img/product/details/product-details-5.jpg"
                    src="assets/img/product/details/thumb-3.jpg"
                    alt=""
                  />
                  <img
                    data-imgbigurl="assets/img/product/details/product-details-4.jpg"
                    src="assets/img/product/details/thumb-4.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Iphone 12 Pro Max 256 GB</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">15.000.000VND</div>
                <p>
                  iPhone 12 ra m???t v???i vai tr?? m??? ra m???t k??? nguy??n ho??n to??n
                  m???i. T???c ????? m???ng 5G si??u t???c, b??? vi x??? l?? A14 Bionic nhanh
                  nh???t th??? gi???i smartphone, m??n h??nh OLED tr??n c???nh tuy???t ?????p v??
                  camera si??u ch???p ????m, t???t c??? ?????u c?? m???t tr??n iPhone 12..
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn">
                  Th??m v??o gi??? h??ng
                </a>
                <a href="#" className="heart-icon">
                  <span className="icon_heart_alt"></span>
                </a>
                
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Mi??u t???
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Th??ng tin
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      ????nh gi?? <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Th??ng tin s???n ph???m</h6>
                      <p>Mi??u t???</p>
                      <p>
                        Ceramic Shield, b???o v??? an to??n cho m???t k??nh iPhone 12
                        th??? hi???n s??? cao c???p t??? nh???ng v???t li???u ch??? t??c, bao g???m
                        khung nh??m c???ng c??p v?? 2 m???t k??nh tuy???t ?????p. H??n th???
                        n???a, m???t k??nh c???a iPhone 12 ???????c b???o v??? b???i m???t l???p g???m
                        (Ceramic Shield), gi??p c???ng h??n m???t k??nh c???a b???t k???
                        chi???c ??i???n tho???i n??o kh??c. iPhone c???a b???n s??? b???n v???ng
                        h??n t???i 4 l???n, kh?? x?????c h??n, mang t???i c???m gi??c y??n t??m
                        khi s??? d???ng.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        iPhone 12 ra m???t v???i vai tr?? m??? ra m???t k??? nguy??n ho??n
                        to??n m???i. T???c ????? m???ng 5G si??u t???c, b??? vi x??? l?? A14
                        Bionic nhanh nh???t th??? gi???i smartphone, m??n h??nh OLED
                        tr??n c???nh tuy???t ?????p v?? camera si??u ch???p ????m, t???t c??? ?????u
                        c?? m???t tr??n iPhone 12.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Th??ng tin s???n ph???m</h6>
                      <p>
                        Thi???t k??? m???ng nh???, nh??? g???n v?? ?????ng c???p iPhone 12 ???? c??
                        s??? ?????t ph?? v??? thi???t k??? v???i ki???u d??ng m???i vu??ng v???n, m???nh
                        m??? v?? sang tr???ng h??n. Kh??ng ch??? v???y, iPhone 12 m???ng h??n
                        11%, nh??? g???n h??n 15% v?? nh??? h??n 16% so v???i th??? h??? tr?????c
                        iPhone 11. B???t ng??? h??n n???a l?? d?? g???n h??n ????ng k??? nh??ng
                        iPhone 12 v???n c?? m??n h??nh 6,1 inch nh?? iPhone 11 m??
                        kh??ng h??? b??? c???t gi???m. Ph???n vi???n m??n h??nh thu h???p t???i ??a
                        c??ng s??? n??? l???c trong thi???t k??? ???? t???o n??n ??i???u k??? di???u ???
                        iPhone 12.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default detailproduct;
