import React, {useState} from 'react';
import {NavBar} from "./index.js";
import {images} from '../constants/index.js';
import styles from "../style.js";

const Cart = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div id="cart">
                <NavBar/>
                <div className={`${styles.paddingY}`}>
                    <text className={`text-white font-sans text-2xl`}>Shopping Cart</text>
                    <div>
                        <div className={`w-full`}>
                            {images.map((img) => (
                                <ul className={`grid sm:grid-cols-12 grid-cols-2 text-white font-sans gap-6 ${styles.paddingY}`}>
                                    <li key={img.id}
                                        className={`sm:col-span-2`}>
                                        <img src={img.link} alt={img.title}/>
                                    </li>
                                    <li key={img.id}
                                        className={`sm:col-span-6`}>
                                        {img.title}
                                    </li>
                                    <li key={img.id}
                                        className={`sm:col-span-2`}>
                                        <div className="flex flex-col items-center gap-4">


                                            <div className="flex gap-2 cursor-pointer">

                                                <div
                                                    onClick={() => setCount(count + 1)}
                                                    className="px-4 text-white"
                                                >
                                                    +
                                                </div>
                                                <text className="text-xl px-4">{count}</text>
                                                <div
                                                    onClick={() => setCount(count - 1)}
                                                    className="px-4 text-white"
                                                >
                                                    -
                                                </div>

                                            </div>

                                            <div
                                                onClick={() => setCount(0)}
                                                className="px-4 text-white cursor-pointer"
                                            >
                                                Reset
                                            </div>
                                        </div>
                                    </li>
                                    <li key={img.id}
                                        className={`sm:col-span-2`}>
                                        {img.price}
                                    </li>
                                </ul>
                                )
                            )}
                        </div>
                        <div className={`flex flex-col`}>
                            <div>
                                <ul className={`list-none text-white font-sans gap-6 grid sm:grid-cols-12 grid-cols-2`}>
                                    <li className={`sm:col-start-9 sm:col-span-2 text-2xl`}>Subtotal</li>
                                    <li className={`sm:col-start-11 sm:col-span-2 text-2xl`}>Sum:</li>
                                </ul>
                            </div>
                            <div className={`grid sm:grid-cols-4 ${styles.marginY}`}>
                                <button
                                    type="submit"
                                    className="text-black font-semibold hover:bg-primary sm:col-start-3 sm:col-span-2"
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