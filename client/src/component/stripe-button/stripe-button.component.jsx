import axios from 'axios'
import React from 'react'

import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100
    const publishableKey = "pk_test_51J7iSOHfXLnn4573uqBgvoYInaznIvqTp3qafRzSmS7WaCed9Fn3F4SDJwMDKSuzlP7wDYnUjZROrBg2bpaJCRuW00biylT0Ra"

    const onToken = (token) => {
       axios({
           url: "payment",
           method: "POST",
           data:{
               amount: priceForStripe,
               token
           }

       }).then(response=> {
           alert("Hurray Payment Successful")
       }).catch(err => {
           console.log("Payment Error" , JSON.parse(err));
           alert("PLease enter valid card")
       })
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