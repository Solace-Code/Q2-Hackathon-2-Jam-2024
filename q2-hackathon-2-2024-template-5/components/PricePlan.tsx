import React from 'react';
import Icons from "./Icons";

const Pricing = () => {
  return (
    <div className="price-plan-section-container">
      {/* Free Plan */}
      <div className="price-plan-card">
        <div className="price-plan-header">
          <h3 className="plan-name">FREE</h3>
          <div className="price-container">
            <div className="price-row">
              <span className="currency">$</span>
              <span className="price-number">0</span>
            </div>
            <span className="plan-period">Per Month</span>
          </div>
        </div>
        
        <div className="plan-benefits">
          {['AI Integration', 'SEO Optimization', '24/7 Customer Support', 
            'Unlimited Product Updates', 'Unlimited Product Storage'].map((benefit) => (
            <div key={benefit} className="benefit-item">
              <div className="tickmark-container free-tickmark">
                {Icons.tickmark}
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <button className="try-button">Try for free</button>
      </div>

      {/* Standard Plan */}
      <div className="price-plan-card">
        <div className="price-plan-header">
          <h3 className="plan-name">STANDARD</h3>
          <div className="price-container">
            <div className="price-row">
              <span className="currency">$</span>
              <span className="price-number">9.99</span>
            </div>
            <span className="plan-period">Per Month</span>
          </div>
        </div>
        
        <div className="plan-benefits">
          {['AI Integration', 'SEO Optimization', '24/7 Customer Support', 
            'Unlimited Product Updates', 'Unlimited Product Storage'].map((benefit, index) => (
            <div key={benefit} className="benefit-item">
              <div className={`tickmark-container ${index < 3 ? 'standard-tickmark-primary' : 'standard-tickmark-secondary'}`}>
                {Icons.tickmark}
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <button className="try-button">Try for free</button>
      </div>

      {/* Premium Plan */}
      <div className="price-plan-card">
        <div className="price-plan-header">
          <h3 className="plan-name">PREMIUM</h3>
          <div className="price-container">
            <div className="price-row">
              <span className="currency">$</span>
              <span className="price-number">19.99</span>
            </div>
            <span className="plan-period">Per Month</span>
          </div>
        </div>
        
        <div className="plan-benefits">
          {['AI Integration', 'SEO Optimization', '24/7 Customer Support', 
            'Unlimited Product Updates', 'Unlimited Product Storage'].map((benefit) => (
            <div key={benefit} className="benefit-item">
              <div className="tickmark-container premium-tickmark">
                {Icons.tickmark}
              </div>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <button className="try-button">Try for free</button>
      </div>
    </div>
  );
};

export default Pricing;