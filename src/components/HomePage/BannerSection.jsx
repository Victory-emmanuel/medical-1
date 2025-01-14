import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";

export default function BannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="h-[60dvh] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.postimg.cc/Vv9yZf7q/21985.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center text-white px-6"
        style={{ y: textY }}
      >
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-4xl ss:text-5xl md:text-7xl text-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Vision, Our Priority
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 text-base ss:text-2xl max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience exceptional eye care with our state-of-the-art optical
          services. Your vision health begins here.
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="xs:flex-row flex-col justify-center gap-4"
        >
          <Button size="lg" color="white" variant="outlined" className="">
            Learn More
          </Button>
          <Button size="lg" className="">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
