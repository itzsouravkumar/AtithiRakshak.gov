import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="p-2 bg-gray-100 text-white fixed w-full z-10 mt-10">
                <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:h-20">
                    <div className="flex justify-between md:justify-start items-center w-full md:w-auto px-4 md:px-0">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="assets/atithiRakshak.png"
                                alt="Atithi Rakshak"
                                className="w-12 h-12 md:w-20 md:h-20 "
                            />
                        </a>
                        <a
                            href="https://www.incredibleindia.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="assets/IndianTourism.svg"
                                alt="Indian Tourism"
                                className="w-12 h-12 md:w-20 md:h-20 md:mx-8"
                            />
                        </a>
                        <a
                            href="https://swachhbharatmission.ddws.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:hidden"
                        >
                            <img
                                src="assets/SwachhBharat.svg"
                                alt="Swachh Bharat"
                                className="w-12 h-12 md:w-20 md:h-20"
                            />
                        </a>
                    </div>

                    {/* Slogan */}
                    <h1 className="text-sm md:text-2xl font-bold text-blue-950 text-center mt-1 md:mt-0">
                        AN INITIATIVE TOWARDS SAFER TRAVEL
                    </h1>

                    {/* Swachh Bharat (Desktop only) */}
                    <div className="hidden md:flex justify-end">
                        <a
                            href="https://swachhbharat.mygov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="assets/SwachhBharat.svg"
                                alt="Swachh Bharat"
                                className="w-20 h-20"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
