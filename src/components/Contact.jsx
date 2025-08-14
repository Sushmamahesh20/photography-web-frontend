import React, { useState } from "react";
import {instagram, whatsapp, email} from "../assets/index.js";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="contact" className="w-full bg-primary py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-8 rounded-lg">

            {/* Left Section */}
            <div className="flex-1 font-sans">
                <h4 className=" uppercase text-sm font-semibold tracking-wide text-white">
                    Contact Us
                </h4>

                <div className="mt-8 space-y-6">
                    {/* Location */}
                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold text-white">Follow Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={instagram} alt="instagram" className="w-[20px] h-[20px]"/>
                                <text className="text-white">abc_abc</text>
                            </div>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={whatsapp} alt="whatsapp" className="w-[20px] h-[20px]"/>
                                <text className="text-white">+9112113123</text>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div>
                            <h5 className="font-semibold text-white">Email Us</h5>
                            <div className="flex items-start px-5 gap-2 py-2">
                                <img src={email} alt="instagram" className="w-[20px] h-[20px] filter invert"/>
                                <text className="text-white">abc@gmail.com</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 bg-primary rounded-lg shadow-md shadow-white p-6 border-white text-white font-sans">
                <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Adam Gelius"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@yourmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone*</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="+91 1111111111"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-amber-50 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message*</label>
                        <textarea
                            name="message"
                            placeholder="Type your message here"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-black font-semibold px-5 py-2 rounded-md hover:bg-primary transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;