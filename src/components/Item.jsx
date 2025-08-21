import React from 'react';
import {image1} from "../assets/index.js";
import {images} from "../constants/index.js";
import NavBar from "./NavBar.jsx";
import styles from "../style.js";
import {useParams} from "react-router-dom";

const Item = () => {
    const {imageId} = useParams();
    return (
        <div className={`bg-black sm:px-16 px-6`}>
            <div id="image">
                <NavBar/>
                <div className={`grid sm:grid-cols-12 grid-cols-4 gap-6 ${styles.paddingY}`}>
                    <div className="text-white text-4xl sm:col-span-4 col-span-4 flex flex-col space-y-8">
                        <div className="font-thin text-sm">{`images >> ${imageId}`}</div>
                        <img src={image1} alt="photo"/>
                    </div>
                    <div className="text-white flex flex-col justify-start p-10 m-6 sm:col-span-8 col-span-4 mt-10 space-y-4 list-none">
                        <li className="text-4xl">{images[0].title}</li>
                        <li className="text-lg font-thin italic">{images[0].content}</li>
                        <li>{images[0].price}</li>
                        <button
                            type="submit"
                            className="text-black font-semibold px-5 py-2 rounded-md hover:bg-primary transition"
                        >Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Item;