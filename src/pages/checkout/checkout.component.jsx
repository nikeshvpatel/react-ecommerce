import React from "react";
import './checkout.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectTotalPrice} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {CardBtn, CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, WarningContainer} from "./checkout.styles";
const CheckoutPage = ({cartItems, totalPrice}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
            <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <TotalContainer>
            <span>TOTAL: ${totalPrice}</span>
        </TotalContainer>
        <WarningContainer>
            *Please click on the following test <CardBtn href="https://stripe.com/docs/testing#cards" target={'_blank'}>credit Cards</CardBtn> for payments* <br/><br/>
            Or you can add random card number. It is just a test mode, so won't charge you.
        </WarningContainer>
        <StripeCheckoutButton price={totalPrice}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice
})

export default connect(mapStateToProps, null)(CheckoutPage);