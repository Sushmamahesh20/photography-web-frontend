const CartReducer = (state, action) => {
    switch(action.type){
        case "Add":
            {
            const idx = state.findIndex(p=> p.id === action.image.id);
            if(idx !== -1) {
                state[idx].quantity += 1;
            }else{
                action.image.quantity = 1;
                return [...state, action.image];
            }
            return [...state];
            }
        case "Increment":
            { const idx = state.findIndex(p => p.id === action.id);
            if(idx !== -1) {
                state[idx].quantity += 1;
            }
            return [...state]; }
        case "Decrement":
            { const idx = state.findIndex(p => p.id === action.id);
            if(state[idx].quantity > 1) {
                state[idx].quantity -= 1;
            }
            return [...state] ;}
        case "Reset":
            return state.filter(p => p.id !== action.id);
        default:
            return [...state];
    }
};

export default CartReducer;