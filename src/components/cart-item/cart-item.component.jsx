import React from "react";
// import './cart-item.styles.scss';
import {CartItemContainer, CartItemImage, ItemDetailsContainer} from "./cart-item.styles";


const CartItem = ({item:{imageUrl, price, name, quantity}})=>{

    return(
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt=""/>
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;