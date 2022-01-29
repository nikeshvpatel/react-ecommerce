import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>  cartItems.reduce((acc, val)=> acc + val.quantity, 0)
);