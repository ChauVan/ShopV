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
                  iPhone 12 ra mắt với vai trò mở ra một kỷ nguyên hoàn toàn
                  mới. Tốc độ mạng 5G siêu tốc, bộ vi xử lý A14 Bionic nhanh
                  nhất thế giới smartphone, màn hình OLED tràn cạnh tuyệt đẹp và
                  camera siêu chụp đêm, tất cả đều có mặt trên iPhone 12..
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn">
                  Thêm vào giỏ hàng
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
                      Miêu tả
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
                      Thông tin
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
                      Đánh giá <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Thông tin sản phẩm</h6>
                      <p>Miêu tả</p>
                      <p>
                        Ceramic Shield, bảo vệ an toàn cho mặt kính iPhone 12
                        thể hiện sự cao cấp từ những vật liệu chế tác, bao gồm
                        khung nhôm cứng cáp và 2 mặt kính tuyệt đẹp. Hơn thế
                        nữa, mặt kính của iPhone 12 được bảo vệ bởi một lớp gốm
                        (Ceramic Shield), giúp cứng hơn mặt kính của bất kỳ
                        chiếc điện thoại nào khác. iPhone của bạn sẽ bền vững
                        hơn tới 4 lần, khó xước hơn, mang tới cảm giác yên tâm
                        khi sử dụng.
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
                        iPhone 12 ra mắt với vai trò mở ra một kỷ nguyên hoàn
                        toàn mới. Tốc độ mạng 5G siêu tốc, bộ vi xử lý A14
                        Bionic nhanh nhất thế giới smartphone, màn hình OLED
                        tràn cạnh tuyệt đẹp và camera siêu chụp đêm, tất cả đều
                        có mặt trên iPhone 12.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Thông tin sản phẩm</h6>
                      <p>
                        Thiết kế mỏng nhẹ, nhỏ gọn và đẳng cấp iPhone 12 đã có
                        sự đột phá về thiết kế với kiểu dáng mới vuông vắn, mạnh
                        mẽ và sang trọng hơn. Không chỉ vậy, iPhone 12 mỏng hơn
                        11%, nhỏ gọn hơn 15% và nhẹ hơn 16% so với thế hệ trước
                        iPhone 11. Bất ngờ hơn nữa là dù gọn hơn đáng kể nhưng
                        iPhone 12 vẫn có màn hình 6,1 inch như iPhone 11 mà
                        không hề bị cắt giảm. Phần viền màn hình thu hẹp tối đa
                        cùng sự nỗ lực trong thiết kế đã tạo nên điều kỳ diệu ở
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
