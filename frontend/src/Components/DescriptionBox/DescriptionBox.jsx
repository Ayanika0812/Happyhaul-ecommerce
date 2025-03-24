import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox-navigator'>
      <div className='descriptionbox'>
        <div
          className={`descriptionbox-nav-bar ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-bar ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        {activeTab === 'description' ? (
          <>
            <p>
              An eCommerce website is an online platform that allows businesses and individuals
              to buy and sell products or services over the internet. It provides features like
              product listings, shopping carts, secure payment gateways, and order tracking to
              facilitate seamless transactions.
            </p>
            <p>Products are displayed with images, prices, available sizes, and color options for a better shopping experience.</p>
          </>
        ) : (
          <p>Customer reviews and ratings will be displayed here.</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
