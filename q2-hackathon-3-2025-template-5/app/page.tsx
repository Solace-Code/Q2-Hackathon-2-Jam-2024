import Image from "next/image";
import OfferNavbar from "../components/OfferNavbar";
import Navbar from "../components/Navbar";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import EditorsPick from '../components/EditorsPick';
import FeaturedProducts from '../components/FeaturedProducts';
import Images from '../components/Images';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="main-container">
      <section className="offer-navbar">
        <OfferNavbar />
      </section>
      <section className="navbar-section">
        <Navbar/>
      </section>
      <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>
      <section className="home-section">
        <div className="home-section-content">
          <div className="home-section-content-left">
            <div className="home-content-title">
              <p>Summer 2020</p>
            </div>
            <div className="home-content-heading">
              <h1>New Collection</h1>
            </div>
            <div className="home-content-paragraph">
              <p>We know how large objects will act, 
              but things on a small scale.</p>
            </div>
            <div className="home-content-btn-container">
              <button className="home-content-btn">SHOP NOW</button>
            </div>
          </div>
          <div className="home-section-content-right"></div>
        </div>
      </section>

      <section className="editor-pick-section">
        <EditorsPick/>
      </section>

      <section className="featured-products-section">
       <FeaturedProducts />
      </section>

      <section className="vita-product-section">
  <div className="vita-product-section-container">
    <div className="vita-product-left">
      <div className="vita-product-heading-container">
        <div className="vita-product-heading-1">
          <h1>SUMMER 2020</h1>
        </div>
        <div className="vita-product-heading-2">
          <h1>Vita Classic Products</h1>
        </div>
        <div className="vita-product-heading-3">
          <p>We know how large objects will act, We know how are objects will act, We know</p>
        </div>
      </div>

      <div className="vita-product-content-container">
        <div className="vita-product-price">
          <h1>$16.48</h1>
        </div>
        <div className="vita-product-button">
          <button className="vita-product-button-btn">ADD TO CART</button>
        </div>
      </div>
    </div>

    <div className="vita-product-right">
      <div className="vita-product-image">
        <Image src={Images.VitaImg} alt="Vita Classic Products" className="vita-product-image-img" />
      </div>
    </div>
  </div>
</section>

<section className="universe-section">
  <div className="universe-section-container">
    <div className="universe-section-left">
      <div className="universe-section-image-container">
        <Image src={Images.Universe} alt="img" className="universe-section-image"/>
      </div>
    </div>
    <div className="universe-section-right">
      <div className="universe-section-heading-container">
        <div className="universe-heading-1">
          <h1>SUMMER 2020</h1>
        </div>
        <div className="universe-heading-2">
          <h1>Part of the Neural Universe</h1>
        </div>
        <div className="universe-heading-3">
          <h1>We know how large objects will act, but things on a small scale.</h1>
        </div>
      </div>
      <div className="universe-section-button-container">
        <div className="universe-buy-button">
          <button className="universe-buy-button-btn">BUY NOW</button>
        </div>
        <div className="universe-read-button">
          <button className="universe-read-button-btn">READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="featured-post-section">
<FeaturedPost/>
</section>

<section className="footer-section">
  <Footer/>
</section>
    </div>
  );
}
