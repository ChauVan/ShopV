import React from 'react'
import {Link} from "react-router-dom"
function menupage() {
  return (
    <div>
      <ul className="header__menu__dropdown">
                  <li>
                    <Link to="/Detailproduct">Shop Details</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shoping Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Check Out</Link>
                  </li>
                  {/* <li>
                    <Link to="/Blog">Blog Details</Link>
                  </li> */}
                </ul>
    </div>
  )
}

export default menupage
