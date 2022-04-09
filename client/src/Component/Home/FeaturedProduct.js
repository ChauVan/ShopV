import React from 'react'

function FeaturedProduct() {
  return (
    <div>
      <section className="featured spad">
    <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Sản phẩm nội bật</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    Tất cả
                  </li>
                  <li data-filter=".oranges">Iphone</li>
                  <li data-filter=".fresh-meat">Samsung</li>
                  <li data-filter=".vegetables">Xiaomi</li>
                  <li data-filter=".fastfood">Vivo</li>
                </ul>
              </div>
            </div>
          </div>
          </section>
    </div>
  )
}

export default FeaturedProduct
