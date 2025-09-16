import React, {createContext, useReducer} from 'react';
import CartReducer from "./CartReducer.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({});

const CartContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, []);
    return (
        <div>
            <CartContext.Provider value={{cart, dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;