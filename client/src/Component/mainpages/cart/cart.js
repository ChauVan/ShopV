import React from 'react'
import Sidebar from '../../include/sidebar'
import Footer from '../../include/footer'
function cart() {
  return (
    <>
    <Sidebar/>
    <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Giỏ hàng</h2>
                        <div className="breadcrumb__option">
                            <a href="./index.html">Home</a>
                            <span>Thông tin giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Shoping Cart Section Begin --> */}
    <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="shoping__cart__item">
                                        <img src="https://images.fpt.shop/unsafe/fit-in/300x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/14/637382632990998957_ip-12-xanhla-1.png" alt=""/>
                                        <h5>Iphone 12 Pro Max 512GB</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        $22.000.000VND
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" value="1"/>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                    $22.000.000VND
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span className="icon_close"></span>
                                    </td>
                                </tr>
                             
        
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <a href="#" className="primary-btn cart-btn">Tiếp tục mua sắm</a>
                        <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                            Cập nhập giỏ hàng</a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Mã giảm giá </h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code"/>
                                <button type="submit" className="site-btn">Áp dụng mã giảm giá </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="shoping__checkout">
                        <h5>Tổng số giỏ hàng</h5>
                        <ul>
                            <li>Tổng phụ <span>$22.000.000VND</span></li>
                            <li>Toàn bộ <span>$22.000.000VND</span></li>
                        </ul>
                        <a href="#" className="primary-btn">TIẾN HÀNH KIỂM TRA</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default cart
