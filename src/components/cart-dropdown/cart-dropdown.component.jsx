import React from "react";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {withRouter} from "react-router-dom";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer} from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>) : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            toggleCartHidden();
            history.push('/checkout');
        }}>
            GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));