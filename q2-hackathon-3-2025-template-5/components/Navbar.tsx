"use client"
import React from 'react';
import Link from "next/link";
import Icons from "./Icons";
import ProductSearch from './ProductSearch';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <Link href="/">
          <h1>Bandage</h1>
        </Link>
      </div>
    
      <div className="navbar-ul-container">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link href="/"><h1>Home</h1></Link>
          </li>
          <li className="navbar-li">
            <Link href="/shop"><h1>Shop</h1></Link>
          </li>
          <li className="navbar-li">
            <Link href="/about"><h1>About</h1></Link>
          </li>
          <li className="navbar-li">
            <Link href="/pricing"><h1>Pricing</h1></Link>
          </li>
          <li className="navbar-li">
            <Link href="/contact"><h1>Contact</h1></Link>
          </li>
        </ul>
      </div>
    
      <div className="navbar-items-container">
        <div className="navbar-account-container">
          <div className="navbar-icon">{Icons.avatar}</div>
          <div className="navbar-account-content">
            <h1>Login / Register</h1>
          </div>
        </div>

        <div className="search-section-container">
            <ProductSearch/>
            <div className="navbar-search-icon">
                {Icons.search}
            </div>
        </div>

        <div className="navbar-cart-container">
          <Link href="/cart">
            <div className="relative">
              <div className="navbar-cart-icon">{Icons.cart}</div>
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </div>
              )}
            </div>
          </Link>
        </div>
    
        <div className="navbar-wishlist-container">
          <div className="navbar-heart-icon">{Icons.heart}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;