import React from 'react'

function FeaturedProduct() {
  return (
    <div>
      <section class="featured spad">
    <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2>Sản phẩm nội bật</h2>
              </div>
              <div class="featured__controls">
                <ul>
                  <li class="active" data-filter="*">
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
