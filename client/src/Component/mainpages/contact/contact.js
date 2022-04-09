import React from 'react'
import Map from './map'
import {Link} from "react-router-dom"
import Sidebar from '../../include/sidebar'
import Footer from '../../include/footer'
function contact() {
  return (
    <>
    <Sidebar/>
      <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Contact Us</h2>
                        <div className="breadcrumb__option">
                            <Link to="/home">Trang chủ</Link>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}

    {/* <!-- Contact Section Begin --> */}
    <section className="contact spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_phone"></span>
                        <h4>Điện thoại</h4>
                        <p>0375054346</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_pin_alt"></span>
                        <h4>Địa chỉ</h4>
                        <p>50/20 đường số 1,Phước Long B, quận 9, TP. Thủ Đức </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_clock_alt"></span>
                        <h4>Mở cửa</h4>
                        <p>8:00 am to 23:00 pm</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div className="contact__widget">
                        <span className="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>vantrungchau@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End --> */}

    {/* <!-- Map Begin --> */}
    <div className="map">
    <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${'AIzaSyD-n2MxMgyfxy3ErbI3s2sh_BETLvtCrcY'}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        <div className="map-inside">
            <i className="icon_pin"></i>
            <div className="inside-widget">
                <h4>TP Thủ Đức</h4>
                <ul>
                    <li>Điện thoại: 0375.054.346</li>
                    <li>Địa chỉ: 50/20 đường số 1,Phước Long B, quận 9, TP. Thủ Đức</li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Map End --> */}

   
   <Footer/>
    </>
  )
}

export default contact
