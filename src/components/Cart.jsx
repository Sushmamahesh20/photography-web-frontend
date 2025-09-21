import React, {useContext} from 'react';
import {NavBar} from "./index.js";
import styles from "../style.js";
import {CartContext} from "../context/CartContextProvider.jsx";
import {useNavigate} from "react-router-dom";

// Create INR currency formatter
const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const Cart = () => {
    const {cart, } = useContext(CartContext);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/details"); // redirect to /about
    };

    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} min-h-screen`}>
            <div id="cart">
                <NavBar/>
                <div className={`${styles.paddingY}`}>
                    <text className={`text-white font-sans text-2xl`}>Shopping Cart</text>
                    <div>
                        <div className={`w-full`}>
                            {cart.map((img) => (
                                <ul className={`grid sm:grid-cols-12 grid-cols-2 text-white font-sans gap-6 ${styles.paddingY}`}>
                                    <li key={img.id}
                                        className={`sm:col-span-2`}>
                                        <img src={img.link} alt={img.title}/>
                                    </li>
                                    <li key={img.title}
                                        className={`sm:col-span-6`}>
                                        {img.title}
                                    </li>
                                    <li key={img.quantity}
                                        className={`sm:col-span-2`}>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="flex gap-2 cursor-pointer">
                                                <text className="text-xl px-4">{img.quantity}</text>
                                            </div>
                                        </div>
                                    </li>
                                    <li key={img.price}
                                        className={`sm:col-span-2`}>
                                        ${img.price}
                                    </li>
                                </ul>
                                )
                            )}
                        </div>
                        <div className={`flex flex-col`}>
                            <div>
                                <ul className={`list-none text-white font-sans gap-6 grid sm:grid-cols-12 grid-cols-2`}>
                                    <li className={`sm:col-start-9 sm:col-span-2 text-2xl`}>Subtotal: {cart.length}</li>
                                    <li className={`sm:col-start-11 sm:col-span-2 text-2xl`}>Sum: ${totalPrice}</li>
                                </ul>
                            </div>
                            <div className={`grid sm:grid-cols-4 ${styles.marginY}`}>
                                <button
                                    type="submit"
                                    className="text-black font-semibold hover:bg-primary sm:col-start-3 sm:col-span-2"
                                    onClick={handleClick}
                                >Checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
