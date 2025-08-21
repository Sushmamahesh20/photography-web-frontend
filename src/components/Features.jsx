import React from 'react';
import {subStyleVideo, subStylePhoto} from "../constants/index.js";
import {image1} from "../assets/index.js";

const Features = () => {
    return (
        <div className="font-sans">
            <div className="flex justify-center">
                <text className="text-white w-[400px] text-6xl leading-normal">Customize to your needs</text>
            </div>
            <div className="m-16 grid sm:grid-cols-12 gap-6">
                <div className="text-white text-4xl sm:col-span-6 flex flex-col space-y-8">
                    <div>Photo</div>
                    <img src={image1} alt="photo"/>
                </div>
                <ul className="text-2xl text-white list-none justify-start p-10 m-6 sm:col-span-6">
                    {subStylePhoto.map( (style, id) => (
                        <li key={style.id}
                        className="font-normal p-4 grid sm:grid-cols-1">
                            <a href={`#${style.id}`}>{style.title}</a>
                            <span className="text-sm font-light">{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="m-16 grid sm:grid-cols-12 gap-4">
                <div className="text-white text-4xl sm:col-span-6 flex flex-col space-y-8">
                    <div>Video</div>
                    <img src={image1} alt="photo" className="w-full h-auto"/>
                </div>
                <ul className="text-2xl text-white list-none justify-start p-10 m-6 sm:col-span-6">
                    {subStyleVideo.map( (style, id) => (
                        <li key={style.id}
                            className="font-normal p-4 grid sm:grid-cols-1">
                            <a href={`#${style.id}`}>{style.title}</a>
                            <span className="text-sm font-light">{style.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Features;