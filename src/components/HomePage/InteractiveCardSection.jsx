import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ImageCard from "../Universal/ImageCard";

const cardData = [
  {
    id: 1,
    image: "https://i.postimg.cc/T3hZSXcf/1000-x-1500-1.png",
    title: "Card 1",
    description: "Description for Card 1. This text will be revealed on hover.",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/LsrJQNzj/2148190718.jpg",
    title: "Card 2",
    description: "Description for Card 2. This text will be revealed on hover.",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/T3hZSXcf/1000-x-1500-1.png",
    title: "Card 3",
    description: "Description for Card 3. This text will be revealed on hover.",
  },
];

export default function InteractiveImageCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <section className="h-auto bg-secondary py-24 xx:px-6 ss:px-12 font-SourceSans3">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="text-primary mb-4">
              Interactive Image Cards
            </Typography>
            <Typography variant="paragraph" className="text-primary mb-6">
              Hover over the images to reveal more information. Use the arrows
              to navigate through the cards.
            </Typography>
            <Typography variant="paragraph" className="text-primary">
              This interactive section demonstrates the use of Framer Motion for
              animations, Material Tailwind for styling, and custom Tailwind
              classes for responsiveness.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[500px] "
          >
            {cardData.map((card, index) => (
              <ImageCard
                key={card.id}
                {...card}
                index={
                  (index - currentIndex + cardData.length) % cardData.length
                }
                total={cardData.length}
              />
            ))}
            <button
              onClick={handleNext}
              className="absolute right-[40%] top-[100%] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-20"
            >
              <ArrowRightIcon className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-[40%] top-[100%] transform -translate-y-1/2 bg-white/50 p-2 rounded-full z-20"
            >
              <ArrowLeftIcon className="h-6 w-6 text-primary" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
