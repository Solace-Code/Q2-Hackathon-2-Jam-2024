import React from 'react'
import Navbar from "../../components/Navbar";
import Icons from "../../components/Icons";
import PricePlan from "../../components/PricePlan";
import PriceFaq from "../../components/PricingFaq";
import Footer from "../../components/Footer";
import ResponsiveNavbar from '../../components/ResponsiveNavbar';

const pricing = () => {
  return (
    <div className="pricing-container">
        <section className='navbar-section'>
            <Navbar/>
        </section>
        <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>
        <section className="simple-pricing-section">
            <div className='simple-pricing-heading-container'>
                <div className="simple-pricing-heading-1">
                    <h1>Pricing</h1>
                </div>
                <div className="simple-pricing-heading-2">
                    <h1>Simple Pricing</h1>
                </div>
            </div>
            <div className="simple-pricing-nav">
                <div className="simple-price-nav-item-1">
                    <h1>Home</h1>
                </div>
                <div className="simple-price-nav-item-2">
                    {Icons.arrowright}
                </div>
                <div className='simple-price-nav-item-3'>
                    <h1>Pricing</h1>
                </div>
            </div>
        </section>

        <section className='price-section'>
            <div className='price-section-heading-container'>
                <div className='price-section-heading-1'>
                    <h1>Pricing</h1>
                </div>
                <div className='price-section-heading-2'>
                    <p>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            <div className='price-nav'>
                <div className='price-nav-item-1'>
                    <h1>Monthly</h1>
                </div>
                <div className='price-nav-item-2'></div>
                <div className="price-nav-item-3">
                    <h1>Yearly</h1>
                </div>
                <div className='price-nav-item-4'>
                    <button className='price-nav-btn'>Save 25%</button>
                </div>
            </div>
        </section>
        {/* Price Plan Section */}

        <section className='price-plan-section'>
            <PricePlan/>
        </section>

        <section className='trusted-section'>
            <div className="trusted-section-heading">
                <h1>Trusted By Over 4000 Big Companies</h1>
            </div>
            <div className='trusted-logos-container'>
                <div className='trusted-logo-icon'>
                    {Icons.hooli}
                </div>
                <div className='trusted-logo-icon'>
                    {Icons.lyft}
                </div>
                <div className='trusted-logo-icon'>
                    {Icons.shopify}
                </div>
                <div className='trusted-logo-icon'>
                    {Icons.stripe}
                </div>
                <div className='trusted-logo-icon'>
                    {Icons.aws}
                </div>
                <div className='trusted-logo-icon'>
                    {Icons.reddit}
                </div>
            </div>
        </section>

        <section className='pricing-faqs-section' id='pricing-faqs-section'>
           <PriceFaq/>
        </section>

        <section className='trial-section'>
            <div className='trial-heading-container'>
                <div className='trial-heading-1'>
                    <h1>Start your 14 days free trial</h1>
                </div>
                <div className="trial-heading-2">
                    <h1>Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.</h1>
                </div>
            </div>
            
            <div className='trial-button-container'>
                <button className='trial-button'>Try it for free now</button>
            </div>

            <div className="trial-socials-container">
                <div className="trial-socials-icon">
                    {Icons.twitter}
                </div>
                <div className="trial-socials-icon">
                    {Icons.facebook}
                </div>
                <div className="trial-socials-icon">
                    {Icons.instagram}
                </div>
                <div className="trial-socials-icon">
                    {Icons.linkedin}
                </div>
            </div>
        </section>

        <section className='footer-section'>
            <Footer/>
        </section>
    </div>
  )
}

export default pricing