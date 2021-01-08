import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Raymond's Shopping App</h1>
            <Link style={linkStyle}to="/">Sign In</Link> | <Link style={linkStyle}to="/buy">Buy</Link> | <Link style={linkStyle} to="/sell">Sell</Link> | <Link style={linkStyle} to="/checkout">Checkout</Link>
        </header>
    )
}
const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}
const headerStyle = {
    background: 'rgb(51, 51, 51)',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

export default Header
