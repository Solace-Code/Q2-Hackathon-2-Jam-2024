'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../components/CartContext';
import Navbar from '@/components/Navbar';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    paymentMethod: 'cashOnDelivery'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + (item.dicountPercentage 
      ? item.price * (1 - item.dicountPercentage / 100) 
      : item.price) * item.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white relative">
      <section className="navbar-section mb-8">
        <Navbar />
      </section>

      <section className="responsive-navbar-section">
        <ResponsiveNavbar />
      </section>

      <h1 className="text-3xl font-bold mb-8 text-black">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 text-black">
          {items.map((item) => {
            const itemPrice = item.dicountPercentage
              ? item.price * (1 - item.dicountPercentage / 100)
              : item.price;

            return (
              <div
                key={item._id}
                className="flex gap-4 border rounded-lg p-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.productImage}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    ${itemPrice.toFixed(2)} x {item.quantity}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ${(itemPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="mt-6 text-right">
            <p className="text-xl font-bold mb-4">
              Total: ${total.toFixed(2)}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Receiver&apos;s Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Payment Method
                </label>
                <div className="flex items-center space-x-2 text-black">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={formData.paymentMethod === 'cashOnDelivery'}
                    onChange={handleInputChange}
                  />
                  <span>Cash on Delivery</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <p className="text-lg font-semibold">
                  Total Amount: ${total.toFixed(2)}
                </p>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-green-600">
              Order placed successfully! Your order will arrive in 30 mins.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}