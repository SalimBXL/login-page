import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({token, handleLogout}) => (
    <div className="navbar-body">
        
        <kbd>{token}</kbd>

        <Link to="/dashboard" style={{color: 'white'}} >Dashboard</Link>
        <Link to="/preferences" style={{color: 'white'}} >Preferences</Link>

    </div>
);

Navbar.prototype = {
    token: PropTypes.object
}

Navbar.defaultProps = {
    //token: undefined
}

export default Navbar;