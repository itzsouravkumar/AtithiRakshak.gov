"use client";
import React from "react";
import { FaUserShield, FaMapMarkedAlt, FaBell, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const steps = [
        { id: 1, text: "Tourist registers and gets Digital ID", icon: <FaUserShield /> },
        { id: 2, text: "Mobile App tracks location with geofencing", icon: <FaMapMarkedAlt /> },
        { id: 3, text: "SOS alerts sent during emergencies", icon: <FaBell /> },
        { id: 4, text: "Authorities respond in real-time", icon: <FaHeadset /> },
        { id: 5, text: "Tourists continue safe and secure travel", icon: <FaCheckCircle /> },
    ];

    return (
        <footer className="bg-white">
            {/* How It Works */}
            <div className="w-full mt-12">
                <div className="max-w-7xl mx-auto px-6 md:px-12 border-2 border-purple-400 rounded-xl py-12">
                    <h2 className="text-center text-2xl font-bold text-blue-900 mb-12">
                        How It Works ?
                    </h2>

                    <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center md:w-1/5 relative">
                                {/* Circle with Icon */}
                                <motion.div
                                    className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl shadow-lg"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                >
                                    {step.icon}
                                </motion.div>

                                {/* Text */}
                                <p className="text-base text-gray-700 mt-6 text-center leading-relaxed">
                                    {step.text}
                                </p>

                                {/* Line connector */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-7 left-[60%] w-full h-0.5 bg-purple-300 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Download App + Contact */}
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 lg:px-12 py-12">
                {/* Download App */}
                <div className="flex flex-row items-center md:items-start">
                    <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Download App</h3>
                        <p className="text-gray-700 mb-3">Available on :</p>
                        <div className="flex items-center space-x-4">
                            <img src="/assets/playstore.svg" alt="Play Store" className="w-10" />
                            <img src="/assets/appstore.svg" alt="App Store" className="w-10" />
                        </div>
                        <div className="flex space-x-4 mt-4">
                            <img src="/assets/qr.svg" alt="QR 1" className="w-16 h-16" />
                        </div>
                    </div>
                    {/* App interface demo image */}
                    <div className="ml-2 hidden md:block">
                        <img src="/assets/mockup.svg" alt="App Demo" className="w-48 h-48 object-contain" />
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us:</h3>
                    <p className="text-gray-700 mb-3">
                        We’d love to hear from you! Whether you’re a tourist, policymaker, or partner, connect with us:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                            <FaUserShield className="text-purple-500 mr-2" />
                            Email: support@atithirakshak.in
                        </li>
                        <li className="flex items-center">
                            <FaHeadset className="text-purple-500 mr-2" />
                            Phone: +91-XXXXXXXXXX
                        </li>
                        <li className="flex items-center">
                            <FaMapMarkedAlt className="text-purple-500 mr-2" />
                            Location: SRM University, Chennai, India
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-800 text-white text-center py-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Team AtithiRakshak. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
