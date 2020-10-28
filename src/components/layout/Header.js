import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Shop</h1>
            <Link style={linkStyle}to="/">Home</Link> | <Link style={linkStyle} to="/checkout">Checkout</Link>
        </header>
    )
}
const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header
