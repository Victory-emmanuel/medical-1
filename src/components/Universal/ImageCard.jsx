/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

export default function ImageCard({ image, title, description, index, total }) {
  const baseOpacity = 1 - index * 0.3;

  return (
    <motion.div
      className="absolute w-64 h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer mb-6"
      style={{
        top: `${index * 60}px`,
        left: `${index * 60}px`,
        zIndex: total - index,
      }}
      initial={{ opacity: baseOpacity }}
      animate={{ opacity: baseOpacity }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="relative w-full h-full ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover bg-blend-overlay"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 p-4 text-white "
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
          <Typography variant="small">{description}</Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
