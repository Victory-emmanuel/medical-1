/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Michael Jackson",
    role: "CEO Of Company",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial:
      "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's.",
  },
  {
    id: 2,
    name: "Parvez Hossein",
    role: "CEO Of Company",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial:
      "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's.",
  },
  {
    id: 3,
    name: "Shoikot Hasan",
    role: "CEO Of Company",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial:
      "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "CTO Of Company",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial:
      "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's.",
  },
  {
    id: 5,
    name: "David Chen",
    role: "CFO Of Company",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    testimonial:
      "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's.",
  },
];

const TestimonialCard = ({ name, role, image, testimonial, isCenter }) => (
  <div
    className={`relative p-8 rounded-2xl shadow-lg ${
      isCenter ? "bg-accent" : "bg-primary"
    } transition-all duration-300`}
  >
    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
      <div className="rounded-full border-4 border-white overflow-hidden w-24 h-24">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="mt-14 text-center">
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${isCenter ? "text-white" : "text-accent"}`}
            fill="currentColor"
          />
        ))}
      </div>
      <Typography
        variant="h5"
        className={`mb-2 ${isCenter ? "text-white" : "text-secondary"}`}
      >
        {name}
      </Typography>
      <Typography
        variant="small"
        className={`mb-6 ${isCenter ? "text-blue-100" : "text-secondary/60"}`}
      >
        {role}
      </Typography>
      <div className="relative">
        <span
          className={`absolute -top-6 left-0 text-6xl ${
            isCenter ? "text-white/20" : "text-accent/20"
          }`}
        >
          "
        </span>
        <Typography
          className={`relative z-10 ${
            isCenter ? "text-blue-100" : "text-secondary/80"
          }`}
        >
          {testimonial}
        </Typography>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [visibleCards, setVisibleCards] = useState(3); // Default visible cards

  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1200) setVisibleCards(3);
    else if (width >= 768) setVisibleCards(2);
    else setVisibleCards(1);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-12 bg-secondary">
      <div className="mx-auto">
        <Typography
          variant="h1"
          className="text-center mb-24 ss:text-4xl text-3xl font-bold text-primary"
        >
          <span>User </span>
          <span className="text-accent">Testimonials</span>
        </Typography>

        <div className="relative pt-12">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-black rounded-full shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-accent" />
            </button>
            <motion.div
              className="flex gap-8"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {Array.from({ length: visibleCards }, (_, offset) => {
                const index =
                  (currentIndex + offset + testimonials.length) %
                  testimonials.length;
                return (
                  <motion.div
                    key={testimonials[index].id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: offset === 0 ? 1 : 0.5,
                      scale: offset === 0 ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <TestimonialCard
                      {...testimonials[index]}
                      isCenter={offset === 0}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-black rounded-full shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
