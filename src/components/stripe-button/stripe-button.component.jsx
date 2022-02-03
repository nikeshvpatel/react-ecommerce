import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6Ni7EFVIgnJbCr3teyBfCTyVjaHv6sBQzKGgfLiiMJwHAQArp7GRBfzsk2nN4WjnWvoxxM11boBTCse9xa9vai00YNvNJS7Z';
    const onToken = token => {
        console.log('token');
        alert('Payment Successful')
    }
    return (
        <StripeCheckout label='Pay Now'
                        name='Nikesh Clothing Ltd.'
                        billingAddress
                        shippingAddress
                        image='https://media-exp1.licdn.com/dms/image/C4E03AQEFQrVOy4qFWg/profile-displayphoto-shrink_200_200/0/1567725348092?e=1649289600&v=beta&t=hKo6c-0A6GHuwjEGx-3zUgiGgN-J-RDZIetxvbmrT4E'
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel='Pay Now'
                        token={onToken}
                        stripeKey={publishableKey}
                        currency='CAD'
        />
    );
};

export default StripeCheckoutButton;