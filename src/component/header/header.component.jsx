import React from "react";
 import {ReactComponent as Logo } from "../../assets/crown.svg";
 import {Link} from "react-router-dom";
 import "./header.styles.scss";

const Header = () => {
    return (
        <div className = "header">
            <Link className="header-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <div className="option">
                    <Link to="/shop">
                        SHOP
                    </Link>
                </div>
                <div className="option">
                    <Link to="/contact">
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;