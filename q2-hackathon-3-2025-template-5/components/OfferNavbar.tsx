import React from 'react'
import Icons from "./Icons"

const OfferNavbar = () => {
  return (
    <div className="offer-navbar-container">
        <div className='offer-navbar-phone'>
            <div className='offer-navbar-icon'>
            {Icons.phone}
            </div>
            <div className='offer-navbar-phone-content'>
                <h1>(225) 555-0118</h1>
            </div>
        </div>
        <div className="offer-navbar-email">
            <div className="offer-navbar-icon">
            {Icons.envelope}
            </div>
            <div className='offer-navbar-email-content'>
                <h1>michelle.rivera@example.com</h1>
            </div>
        </div>
        <div className="offer-navbar-message">
            <h1>Follow Us  and get a chance to win 80% off</h1>
        </div>
        <div className="offer-navbar-socials">
            <div className='offer-navbar-socials-content'>
                <h1>Follow Us :</h1>
                <div className='offer-navbar-social-icon'>
                {Icons.instagram}
                {Icons.youtube}
                {Icons.facebook}
                {Icons.twitter}
                </div>
            </div>
        </div>
    </div>
  )
}

export default OfferNavbar