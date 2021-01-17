

export default (state = {cartItems : []}, { type, payload }) => {
    switch (type) {

    case "CART_ADD_ITEM":
        
        const existItem = state.cartItems.find(x => x.product === payload.product)
        if(existItem){
            return{...state , cartItems: state.cartItems.map(x => x.product === existItem.product ?  payload :x)}
        }
        return { ...state, cartItems : [...state.cartItems , payload] }

    default:
        return state
    }
}
