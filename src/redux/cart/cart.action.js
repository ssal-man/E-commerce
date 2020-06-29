import CartActionType from './cart.action.type';

const toggleCartHidden =()=>{
    return({
        type:CartActionType.TOGGLE_CART_HIDDEN
    })
}
 export default toggleCartHidden;