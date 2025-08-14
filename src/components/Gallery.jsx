
import React from "react";
import {images} from '../constants/index.js';
const Gallery = () => {
    return (
        <div id="gallery" className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 font-sans text-white">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col items-start">
                    <img
                        src={image.link}
                        alt={image.id}
                        className="w-full h-[500px] object-cover rounded-lg"
                    />
                    <h3 className="mt-4 text-lg ">{image.title}</h3>
                    <p className="text-sm font-light ">{image.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;