import React from 'react'

import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = "pk_test_51J7iSOHfXLnn4573uqBgvoYInaznIvqTp3qafRzSmS7WaCed9Fn3F4SDJwMDKSuzlP7wDYnUjZROrBg2bpaJCRuW00biylT0Ra"

    const onToken = (token) => {
        console.log(token)
        alert("Payment Succesfull !!!")
    }
    return (
        <StripeCheckout
            name="Ecommerce Site ReactJS"
            description={`Your total is Rs. ${price}`}
            image ="https://svgshare.com/i/Yd8.svg"
            label="Pay Now"
            panelLabel="Pay Now"
            amount = {priceForStripe}
            stripeKey = {publishableKey}
            shippingAddress
            billingAddress
            token ={onToken}
        />
    )
}

export default StripeCheckoutButton