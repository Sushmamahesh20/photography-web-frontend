
import React from "react";
import {images} from '../constants/index.js';
import {Link} from "react-router-dom";
const Gallery = () => {
    return (
        <div id="gallery" className="max-w-6xl mx-auto px-8 pt-20 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 font-sans text-white">
            {images.map((image) => (
                <div key={image.id} className="flex flex-col items-start">
                        <Link to={`/item/${image.id}`}>
                            <img
                                src={image.link}
                                alt={image.id}
                                className="w-full h-[500px] object-cover rounded-lg"
                            />
                        </Link>
                        <Link to={`/item/${image.id}`}><h3 className="mt-4 text-lg">{image.title}</h3></Link>
                        <Link to={`/item/${image.id}`}>
                            <p className="text-sm font-light">{image.price}</p>
                        </Link>

                </div>
            ))}
        </div>
    );
};

export default Gallery;