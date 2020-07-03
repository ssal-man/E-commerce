export const addItemToCart = (cartItems,itemToAdd) =>{
    const existing = cartItems.find(cartItem=>cartItem.id===itemToAdd.id)
    if (existing) {
        return cartItems.map(item => {
            // item.id===itemToAdd.id?
            // {...item,quantity:item.quantity+1}
            // :item
            if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            else {
                return item
            }
        })
    }
    
    else{
    return [...cartItems,{...itemToAdd,quantity:1}]}
}

export const decreaseQuantity = (cartItems,itemToRemove) => {
    const existedItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)
    if (existedItem.quantity === 1) {
        return cartItems.filter(item=>item.id!==existedItem.id)
    } 
    return cartItems.map(item => {
        if (item.id === itemToRemove.id) {
            return { ...item, quantity: item.quantity - 1 }
        }
        else {
            return item
        }
    })
}