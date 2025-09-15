"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export default function Homepage() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; name: string } | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const videos = [
    { src: "assets/video1.mp4", name: "Nohkalikai Falls" },
    { src: "assets/video5.mp4", name: "Darjeeling" },
    { src: "assets/video3.mp4", name: "Goa" },
    { src: "assets/video4.mp4", name: "Marina Beach" },
    { src: "assets/video10.mp4", name: "Taj Mahal, Agra" },
    { src: "assets/video6.mp4", name: "Teachers Day" },
    { src: "assets/video7.mp4", name: "Ram Setu" },
    { src: "assets/video8.mp4", name: "Shiv Mandir" },
    { src: "assets/video9.mp4", name: "Pangong Lake, Ladakh" },
  ];

  const handleMouseEnter = (video: { src: string; name: string }) => {
    hoverTimeout.current = setTimeout(() => {
      setActiveVideo(video);
    }, 600);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  };

  return (
    <div className="relative">
      {/* Top Header */}
      <div className="flex flex-wrap justify-between items-center p-2 text-black">
        <h2 className="whitespace-nowrap text-sm md:text-base">
          भारत सरकार | Government of India
        </h2>
        <h2 className="whitespace-nowrap text-sm md:text-base">हिन्दी</h2>
      </div>

      {/* Navbar */}
      <div className="flex justify-end items-center p-2 text-black mt-24">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>|</li>
          <li>About Us</li>
          <li>|</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-3 md:grid-cols-9 w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`bg-gray-200 aspect-[1/2] cursor-pointer ${
              index > 2 ? "hidden md:block" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(video)}
            onMouseLeave={handleMouseLeave}
          >
            <video
              src={video.src}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Floating Video Preview */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="relative w-[90%] md:w-[75%] lg:w-[70%] aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 z-10 bg-black/50 text-white text-xl rounded-full px-3 py-1 hover:bg-black/70 transition"
                onClick={() => setActiveVideo(null)}
              >
                ✖
              </button>

              {/* Video */}
              <video
                src={activeVideo.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Caption */}
              <div
                className={`${poppins.className} absolute bottom-0 w-full bg-black/60 text-white text-center py-2 text-lg font-semibold`}
              >
                {activeVideo.name}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <h1 className="text-3xl font-bold text-center my-8">
          What is Atithi Rakshak?
        </h1>
        <p className="text-center mx-4 md:mx-20 lg:mx-40 mb-8">
          Atithi Rakshak is an initiative by the Government of India to ensure
          the safety and security of tourists across the country. The platform
          provides real-time assistance, emergency services, and essential
          information to travelers, enhancing their overall experience and
          promoting tourism in India. It aims to bridge the gap between tourists
          and local authorities, offering a seamless and secure travel experience.
          With features like 24/7 helpline support, location-based alerts, and
          multilingual assistance, Atithi Rakshak is dedicated to making India a
          safer and more welcoming destination for visitors from around the globe.
        </p>
      </div>
    </div>
  );
}
