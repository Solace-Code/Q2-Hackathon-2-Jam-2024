import React from 'react';
import Image from "next/image";
import Navbar from '../../components/Navbar';
import Images from '../../components/Images';
import Icons from '../../components/Icons';
import Footer from '../../components/Footer';
import ResponsiveNavbar from '../../components/ResponsiveNavbar';

const about = () => {
  return (
    <div className='about-container'>
        <section className='navbar-section'>
            <Navbar/>
        </section>
        <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>
        <section className='about-main-section'>
            <div className='about-main-left'>
                <div className='about-main-left-heading-container'>
                    <div className='about-main-left-heading-1'>
                        <h1>About Company</h1>
                    </div>
                    <div className='about-main-left-heading-2'>
                        <h1>ABOUT US</h1>
                    </div>
                    <div className='about-main-left-heading-3'>
                        <p>We know how large objects will act, 
                        but things on a small scale</p>
                    </div>
                </div>
                <div className="about-main-left-button-container">
                    <button className='about-left-button'>Get Quote Now</button>
                </div>
            </div>
            <div className="about-main-right">
                <div className='about-main-right-bg-container'>
                    <div className='about-main-bg-first'></div>
                    <div className='about-main-bg-second'></div>
                </div>
            </div>
        </section>

        <section className='about-section-2'>
            <div className="about-section-2-left">
                <div className="about-section-2-left-heading-1">
                    <h1>Problem Trying</h1>
                </div>
                <div className="about-section-2-left-heading-2">
                    <h1>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
                </div>
            </div>
            <div className="about-section-2-right">
                <div className="about-section-2-right-content">
                    <h1>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </h1>
                </div>
            </div>
        </section>

        <section className='about-section-3'>
            <div className='about-section-3-content'>
                <div className='about-section-3-item'>
                    <div className='about-section-3-item-heading-1'>
                        <h1>15K</h1>
                    </div>
                    <div className='about-section-3-item-heading-2'>
                        <h1>Happy Customer</h1>
                    </div>
                </div>

                <div className='about-section-3-item'>
                    <div className='about-section-3-item-heading-1'>
                        <h1>150K</h1>
                    </div>
                    <div className='about-section-3-item-heading-2'>
                        <h1>Monthly Visitors</h1>
                    </div>
                </div>

                <div className='about-section-3-item'>
                    <div className='about-section-3-item-heading-1'>
                        <h1>15</h1>
                    </div>
                    <div className='about-section-3-item-heading-2'>
                        <h1>Countries Worldwide</h1>
                    </div>
                </div>

                <div className='about-section-3-item'>
                    <div className='about-section-3-item-heading-1'>
                        <h1>100+</h1>
                    </div>
                    <div className='about-section-3-item-heading-2'>
                        <h1>Top Partners</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className='about-video-section'>
            <div className="about-video-card-container">
                <Image src={Images.VideoCard} alt='img' className='about-video-card'/>
            </div>
        </section>

        <section className='about-team-section'>
            <div className='about-team-heading-container'>
                <div className="about-team-heading-1">
                    <h1>Meet Our Team</h1>
                </div>
                <div className="about-team-heading-2">
                    <h1>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </h1>
                </div>
            </div>

            <div className='about-team-container'>
                <div className='about-team-box' id='team-box-1'>
                    <div className="about-team-box-img">
                        <Image src={Images.Team1} alt='img' className='about-team-img-img'/>
                    </div>
                    <div className="about-team-box-content">

                        <div className="about-team-content-heading-container">
                            <div className="about-team-content-heading-1">
                                <h1>Username</h1>
                            </div>
                            <div className="about-team-content-heading-2">
                                <h1>Profession</h1>
                            </div>
                        </div>

                        <div className="about-team-content-socials">
                            <div className="about-team-socials-facebook">
                                {Icons.facebook}
                            </div>
                            <div className='about-team-socials-instagram'>
                                {Icons.instagram}
                            </div>
                            <div className="about-team-socials-twitter">
                                {Icons.twitter}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-team-box' id='team-box-2'>
                    <div className="about-team-box-img">
                        <Image src={Images.Team2} alt='img' className='about-team-img-img'/>
                    </div>
                    <div className="about-team-box-content">

                        <div className="about-team-content-heading-container">
                            <div className="about-team-content-heading-1">
                                <h1>Username</h1>
                            </div>
                            <div className="about-team-content-heading-2">
                                <h1>Profession</h1>
                            </div>
                        </div>

                        <div className="about-team-content-socials">
                            <div className="about-team-socials-facebook">
                                {Icons.facebook}
                            </div>
                            <div className='about-team-socials-instagram'>
                                {Icons.instagram}
                            </div>
                            <div className="about-team-socials-twitter">
                                {Icons.twitter}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-team-box' id='team-box-3'>
                    <div className="about-team-box-img">
                        <Image src={Images.Team3} alt='img' className='about-team-img-img'/>
                    </div>
                    <div className="about-team-box-content">

                        <div className="about-team-content-heading-container">
                            <div className="about-team-content-heading-1">
                                <h1>Username</h1>
                            </div>
                            <div className="about-team-content-heading-2">
                                <h1>Profession</h1>
                            </div>
                        </div>

                        <div className="about-team-content-socials">
                            <div className="about-team-socials-facebook">
                                {Icons.facebook}
                            </div>
                            <div className='about-team-socials-instagram'>
                                {Icons.instagram}
                            </div>
                            <div className="about-team-socials-twitter">
                                {Icons.twitter}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

        <section className="about-company-area-section">
            <div className='about-company-heading-container'>
                <div className='about-company-heading-1'>
                    <h1>Big Companies Are Here</h1>
                </div>
                <div className="about-company-heading-2">
                    <h1>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </h1>
                </div>
            </div>

            <div className="about-company-area-logo-container">
                <div className="about-company-area-logo-icon">
                    {Icons.hooli}
                </div>
                <div className="about-company-area-logo-icon">
                    {Icons.lyft}
                </div>
                <div className="about-company-area-logo-icon">
                    {Icons.shopify}
                </div>
                <div className="about-company-area-logo-icon">
                    {Icons.stripe}
                </div>
                <div className="about-company-area-logo-icon">
                    {Icons.aws}
                </div>
                <div className="about-company-area-logo-icon">
                    {Icons.reddit}
                </div>

            </div>
        </section>

        <section className="work-section">
      <div className="work-container">
        <div className="work-content">
          <div className="work-text">
            <h2 className="work-subtitle">WORK WITH US</h2>
            <h1 className="work-title">Now Let&apos;s grow Yours</h1>
            <p className="work-description">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
          </div>
          <button className="work-button">Contact</button>
        </div>
        <div className="work-image">
          <Image
            src={Images.AboutWork}
            alt="Work with us"
            fill
            className="work-img"
            priority
          />
        </div>
      </div>
    </section>
    
    <section className="footer-section">
        <Footer/>
    </section>
    </div>
  )
}

export default about