import React from 'react'
import OfferNavbar from "../../components/OfferNavbar";
import Navbar from "../../components/Navbar";
import Icons from "../../components/Icons";
import Footer from "../../components/Footer";
import ShopProducts from "../../components/ShopProducts";
import ResponsiveNavbar from '../../components/ResponsiveNavbar';

const shop = () => {
  return (
    <div className='shop-main-container'>
      <section className='offer-navbar'>
        <OfferNavbar />
      </section>
      <section className='navbar-section'>
        <Navbar />
      </section>
      <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>
      <section className='shop-main-section'>
        <div className='shop-main-section-navbar'>
          <div className='shop-main-navbar-heading'>
            <h1>Shop</h1>
          </div>
          <div className="shop-main-navbar-items">
            <div className='shop-navbar-items-1'>
              <h1>Home</h1>
            </div>
            <div className='shop-navbar-items-2'>
              {Icons.arrowright}
            </div>
            <div className='shop-navbar-items-3'>
              <h1>Shop</h1>
            </div>
          </div>
        </div>

        <div className='shop-main-categories-section'>
          <div className='shop-main-section-category-container'>
            {/* Category Box 1 */}
            <div className='category-box-1'>
              <div className='category-box-overlay'>
                <div className='category-box-content'>
                  <div className='category-box-content-heading'>
                    <h1>CLOTHS</h1>
                  </div>
                  <div className='category-box-content-content'>
                    <p>5 Items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Box 2 */}
            <div className='category-box-2'>
              <div className='category-box-overlay'>
                <div className='category-box-content'>
                  <div className='category-box-content-heading'>
                    <h1>ACCESSORIES</h1>
                  </div>
                  <div className='category-box-content-content'>
                    <p>8 Items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Box 3 */}
            <div className='category-box-3'>
              <div className='category-box-overlay'>
                <div className='category-box-content'>
                  <div className='category-box-content-heading'>
                    <h1>FOOTWEAR</h1>
                  </div>
                  <div className='category-box-content-content'>
                    <p>12 Items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Box 4 */}
            <div className='category-box-4'>
              <div className='category-box-overlay'>
                <div className='category-box-content'>
                  <div className='category-box-content-heading'>
                    <h1>HOME</h1>
                  </div>
                  <div className='category-box-content-content'>
                    <p>6 Items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Box 5 */}
            <div className='category-box-5'>
              <div className='category-box-overlay'>
                <div className='category-box-content'>
                  <div className='category-box-content-heading'>
                    <h1>BEAUTY</h1>
                  </div>
                  <div className='category-box-content-content'>
                    <p>10 Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='shop-main-section-footer'>
            <div className='shop-main-footer-item-1'>
                <h1>Showing all 12 results</h1>
            </div>
            <div className='shop-main-footer-item-2'>
                <div className='shop-main-footer-item-2-heading'>
                    <h1>Views:</h1>
                </div>
                <div className='shop-main-footer-item-2-icon'>
                    {Icons.grid}
                </div>
                <div className='shop-main-footer-item-2-icon'>
                    {Icons.list}
                </div>
            </div>
            <div className='shop-main-footer-item-3'>
                <div className='shop-main-footer-item-3-popularity'>
                    <button className='popularity-btn'>Popularity</button>
                </div>
                <div className='shop-main-footer-item-3-filter'>
                    <button className="filter-btn">Filter</button>
                </div>
            </div>
        </div>
      </section>
      <section className="company-logo-section">
        <div className='company-logo-icon-container'>
            <div className='company-logo-icon'>
                {Icons.hooli}
            </div>
            <div className='company-logo-icon'>
                {Icons.lyft}
            </div>
            <div className='company-logo-icon'>
                {Icons.shopify}
            </div>
            <div className='company-logo-icon'>
                {Icons.stripe}
            </div>
            <div className='company-logo-icon'>
                {Icons.aws}
            </div>
            <div className='company-logo-icon'>
                {Icons.reddit}
            </div>
        </div>
      </section>

      <section className='footer-section'>
        <Footer/>
      </section>

      <section className='shop-product-section'>
        <ShopProducts />
      </section>
    </div>
  )
}

export default shop;
