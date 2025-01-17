import React from "react";
import Icons from "./Icons"; // Importing the Icons component

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-gray-900">Bandage</h2>
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-blue-500 text-xl">
              {Icons.facebook}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-xl">
              {Icons.instagram}
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-xl">
              {Icons.twitter}
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Company Info</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Carrier
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  We are hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Features</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Business Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  User Analytic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-blue-500">
                  iOS & Android
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Watch a Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Get in Touch</h4>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg"
              />
              <button className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-500">
              Lorem ipsum dolor amet.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
