import {createSelector} from  "reselect"

const selectCart = state => state.cart          //INput selectors

export const selectCartItems = createSelector(      //Output selectors
    [selectCart], 
    cart => cart.cartItems
    )

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity) ,0)
)    