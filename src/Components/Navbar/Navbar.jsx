import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return (
        <div className='navbar'>
            {/* Logo Section */}
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <p>HAPPYHAUL</p>
            </div>

            {/* Navigation Menu */}
            <ul className='nav-menu'>
                <li onClick={() => setMenu("Shop")}>
                    <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                        Shop
                    </Link>
                    {menu === "Shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Mens")}>
                    <Link to='/mens' style={{ textDecoration: "none", color: "inherit" }}>
                        Men
                    </Link>
                    {menu === "Mens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Womens")}>
                    <Link to='/womens' style={{ textDecoration: "none", color: "inherit" }}>
                        Women
                    </Link>
                    {menu === "Womens" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Kids")}>
                    <Link to='/kids' style={{ textDecoration: "none", color: "inherit" }}>
                        Kids
                    </Link>
                    {menu === "Kids" ? <hr /> : null}
                </li>
            </ul>

            {/* Login & Cart Section */}
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="cart icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
