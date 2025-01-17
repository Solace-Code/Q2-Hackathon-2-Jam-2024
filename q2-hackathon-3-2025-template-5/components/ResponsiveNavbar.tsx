import React from 'react'
import Link from "next/link";

const ResponsiveNavbar = () => {
  return (
    <div className='responsive-navbar-ul-container'>
            <ul className='responsive-navbar-ul'>
                <li className='responsive-navbar-li'>
                    <Link href="/">
                    <h1>Home</h1>
                    </Link>
                </li>
                <li className='responsive-navbar-li'>
                    <Link href="/shop">
                    <h1>Shop</h1>
                    </Link>
                </li>
                <li className='responsive-navbar-li'>
                    <Link href="/about">
                    <h1>About</h1>
                    </Link>
                </li>
                <li className='responsive-navbar-li'>
                    <Link href="/pricing">
                    <h1>Pricing</h1>
                    </Link>
                </li>
                <li className='responsive-navbar-li'>
                    <Link href="/contact">
                    <h1>Contact</h1>
                    </Link>
                </li>
            </ul>
        </div>
  )
}

export default ResponsiveNavbar