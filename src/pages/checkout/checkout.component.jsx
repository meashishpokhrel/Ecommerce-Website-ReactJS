import React from "react"
import "./checkout.styles.scss"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { selectCartItems, selectCartTotal} from "../../redux/cart/cart-selectors"
import CheckoutItem from "../../component/checkout-item/checkout-item.component"


const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
            </div>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
            }
            <div className="total">
                Total Rs. {total} 
            </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
        total: selectCartTotal,
        cartItems: selectCartItems

})


export default connect(mapStateToProps)(CheckoutPage)