import React from 'react'
import Navbar from "../../components/Navbar";
import Icons from "../../components/Icons";
import Footer from "../../components/Footer";
import ResponsiveNavbar from '../../components/ResponsiveNavbar';

const contact = () => {
  return (
    <div className="contact-container">
        <section className="navbar-section">
            <Navbar/>
        </section>
        <section className="responsive-navbar-section">
      <ResponsiveNavbar/>
      </section>
        <section className='contact-main-section'>
            <div className="contact-main-content-container">
                <div className="contact-main-content-left">
                    <div className="contact-main-content-left-heading-container">
                        <div className='contact-main-content-heading-1'>
                            <h1>CONTACT US</h1>
                        </div>
                        <div className="contact-main-content-heading-2">
                            <h1>Get in touch today!</h1>
                        </div>
                        <div className="contact-main-content-heading-3">
                            <h1>We know how large objects will act, 
                            but things on a small scale</h1>
                        </div>

                        <div className='contact-main-content-contact-phone'>
                            <h1>Phone: +451 215 215</h1>
                        </div>
                        <div className="contact-main-content-contact-fax">
                            <h1>Fax: +451 215 215</h1>
                        </div>

                        <div className="contact-main-content-socials-container">
                        <div className='contact-socials-icon'>
                            {Icons.twitter}
                        </div>
                        <div className='contact-socials-icon'>
                            {Icons.facebook}
                        </div>
                        <div className='contact-socials-icon'>
                            {Icons.instagram}
                        </div>
                        <div className='contact-socials-icon'>
                            {Icons.linkedin}
                        </div>
                    </div>
                    </div>
                   
                </div>  {/*contect left ending div*/}
                <div className="contact-main-content-right">
                    <div className='contact-main-right-bg-1'></div>
                    <div className="contact-main-right-bg-2"></div>
                </div>
            </div>
        </section>

        <section className="visit-section">
            <div className='visit-heading-container'>
                <div className="vist-heading-1">
                    <h1>VISIT OUR OFFICE</h1>
                </div>
                <div className="visit-heading-2">
                    <h1>We help small businesses 
                    with big ideas</h1>
                </div>
            </div>

            <div className="vist-contact-container">
                {/* Visit contact Box 1 */}
                <div className='visit-contact-box' id='visit-contact-box-1'>
                    <div className='visit-contact-box-icon'>
                        {Icons.phone}
                    </div>
                    <div className="visit-contact-box-content-container">
                        <div className="visit-contact-box-heading-container">
                            <div className="visit-contact-box-heading-1">
                                <h1>georgia.young@example.com</h1>
                            </div>
                            <div className='visit-contact-box-heading-2'>
                                <h1>georgia.young@ple.com</h1>
                            </div>
                        </div>
                        <div className='visit-contact-box-content'>
                            <div className='visit-contact-box-contact-heading'>
                                <h1>Get Support</h1>
                            </div>
                            <div className='visit-contact-box-content-button-container'>
                                <button className='visit-contact-box-button'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* Visit contact Box 2 */}
                 <div className='visit-contact-box' id='visit-contact-box-2'>
                    <div className='visit-contact-box-icon'>
                        {Icons.location}
                    </div>
                    <div className="visit-contact-box-content-container">
                        <div className="visit-contact-box-heading-container">
                            <div className="visit-contact-box-heading-1">
                                <h1>georgia.young@example.com</h1>
                            </div>
                            <div className='visit-contact-box-heading-2'>
                                <h1>georgia.young@ple.com</h1>
                            </div>
                        </div>
                        <div className='visit-contact-box-content'>
                            <div className='visit-contact-box-contact-heading'>
                                <h1>Get Support</h1>
                            </div>
                            <div className='visit-contact-box-content-button-container'>
                                <button className='visit-contact-box-button'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
                  {/* Visit contact Box 3 */}
                  <div className='visit-contact-box' id='visit-contact-box-3'>
                    <div className='visit-contact-box-icon'>
                        {Icons.envelope1}
                    </div>
                    <div className="visit-contact-box-content-container">
                        <div className="visit-contact-box-heading-container">
                            <div className="visit-contact-box-heading-1">
                                <h1>georgia.young@example.com</h1>
                            </div>
                            <div className='visit-contact-box-heading-2'>
                                <h1>georgia.young@ple.com</h1>
                            </div>
                        </div>
                        <div className='visit-contact-box-content'>
                            <div className='visit-contact-box-contact-heading'>
                                <h1>Get Support</h1>
                            </div>
                            <div className='visit-contact-box-content-button-container'>
                                <button className='visit-contact-box-button'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="lets-talk-section">
            <div className='lets-talk-heading-container'>
                <div className='lets-talk-heading-1'>
                    <h1>WE CANT WAIT TO MEET YOU</h1>
                </div>
                <div className='lets-talk-heading-2'>
                    <h1>Let&apos;s Talk</h1>
                </div>
            </div>
            <div className="lets-talk-section-button-container">
                <button className="lets-talk-btn">Contact Now</button>
            </div>
        </section>

        <section className="footer-section">
            <Footer/>
        </section>
    </div>
  )
}

export default contact