import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce(
        (accumulatedCount,cartItem)=>accumulatedCount+cartItem.quantity,0
    )
)

export const selectHiddenToggle = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const totalCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedCount, cartItem) => accumulatedCount + cartItem.quantity*cartItem.price, 0
    )
)