import React from "react";
 import {ReactComponent as Logo } from "../../assets/crown.svg";
 import {Link} from "react-router-dom";
 import {auth } from "../../firebase/firebase.utils"
 import "./header.styles.scss";

const Header = ({currentUser}) => {
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
                {
                    currentUser ?
                    <div className="option" onClick={ ()=> auth.signOut() }>SIGN OUT</div>
                    :
                    <Link className = "option" to="/signin"> SIGN IN </Link>
                }
            </div>
        </div>
    )
}

export default Header;