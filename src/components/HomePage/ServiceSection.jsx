/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaEye, FaGlasses } from "react-icons/fa";
import CardOne from "../Universal/CardOne";
import BgOne from "../Universal/BgOne";
import { Typography } from "@material-tailwind/react";

const services = [
  {
    title: "Comprehensive Eye Exams",
    description:
      "Detailed evaluations to ensure the health of your vision, tailored for all age groups.",
    image: "https://i.postimg.cc/X736G5JQ/2148310020.jpg",
    moreInfo:
      "Our comprehensive eye exams include assessments for visual acuity, glaucoma, and overall eye health. Using state-of-the-art equipment, we ensure your eyes are in optimal condition.",
  },
  {
    title: "Prescription Glasses & Lenses",
    description:
      "A wide range of stylish frames and advanced lenses for every need.",
    image: "https://i.postimg.cc/X736G5JQ/2148310020.jpg",
    moreInfo:
      "Choose from our extensive collection of designer frames and high-quality lenses. Whether for reading, driving, or daily wear, we have the perfect match for your lifestyle.",
  },
  {
    title: "Contact Lenses",
    description: "Custom fit lenses for clear and comfortable vision.",
    image: "https://i.postimg.cc/X736G5JQ/2148310020.jpg",
    moreInfo:
      "From daily disposables to specialized lenses, we provide options tailored to your needs. Enjoy a comfortable fit with expert fitting services.",
  },
  {
    title: "Contact Lenses",
    description: "Custom fit lenses for clear and comfortable vision.",
    image: "https://i.postimg.cc/X736G5JQ/2148310020.jpg",
    moreInfo:
      "From daily disposables to specialized lenses, we provide options tailored to your needs. Enjoy a comfortable fit with expert fitting services.",
  },
];

const FloatingIcon = ({ Icon, x, y }) => {
  return (
    <motion.div
      className="absolute text-primary opacity-20 text-[30rem]"
      initial={{ x, y }}
      animate={{
        x: x + Math.random() * 20 - 10,
        y: y + Math.random() * 20 - 10,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Icon />
    </motion.div>
  );
};

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 px-6 ss:px-12 bg-black overflow-hidden"
    >
      <BgOne />
      <FloatingIcon Icon={FaEye} x={20} y={100} />
      <FloatingIcon Icon={FaGlasses} x={1000} y={100} />

      <div className="mb-12 text-center">
        <Typography
          variant="h2"
          color="secondary"
          className="mb-8 text-center text-primary text-4xl sm:text-5xl"
        >
          Our Services
        </Typography>
        <p className="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem placeat et sit sint nemo, cum fugit at ducimus nihil
          fuga
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        {services.map((service, index) => (
          <CardOne key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
