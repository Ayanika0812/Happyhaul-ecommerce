import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on yout Email</h1>
        <p>Subscribe to out newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
    
  );
};

export default Newsletter;
