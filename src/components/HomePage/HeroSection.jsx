"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const images = [
  "https://i.postimg.cc/c43ZG6wR/2150917648.jpg",
  "https://i.postimg.cc/Vv9yZf7q/21985.jpg",
  "https://i.postimg.cc/X736G5JQ/2148310020.jpg",
  "https://i.postimg.cc/VsXckgYJ/2150917639.jpg",
];

const textBlocks = [
  {
    heading: "Welcome to Our Site",
    description: "Discover amazing features and services",
    buttonText: "Get Started",
  },
  {
    heading: "Your Vision, Our Mission",
    description: "Providing top-notch optical care for everyone.",
    buttonText: "Explore Now",
  },
  {
    heading: "Experience Excellence",
    description: "Quality services tailored to your needs.",
    buttonText: "Learn More",
  },
  {
    heading: "See the World Clearly",
    description: "Innovative solutions for better vision.",
    buttonText: "Contact Us",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="hero"
      className="relative sm:h-[100dvh] xx:h-[60dvh]  overflow-hidden bg-black"
    >
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />
      </AnimatePresence>

      {/* Text Block Fading with Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center group"
        >
          <div className="sm:w-1/2 xx:w-[100%] bg-secondary/65 p-8 text-center sm:rounded-lg hover:bg-accent/80 cursor-pointer transition duration-300">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 md:text-5xl xx:text-4xl"
            >
              {textBlocks[currentIndex].heading}
            </Typography>
            <Typography variant="lead" color="white" className="mb-12">
              {textBlocks[currentIndex].description}
            </Typography>
            <button className="bg-accent/60 text-white font-bold py-2 px-4 rounded hover:bg-accent/80 transition duration-300">
              {textBlocks[currentIndex].buttonText}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
