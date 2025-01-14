/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardOne = ({ title, description, image, moreInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="perspective-1000 w-[100%] h-[30rem]"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="w-full h-full bg-secondary/70 text-primary border border-primary/20">
        <motion.div
          className={`absolute w-full h-full backface-hidden ${
            isFlipped ? "hidden" : ""
          }`}
        >
          <CardHeader floated={false} className="h-1/2 ">
            <div className=" flex items-center justify-center ">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography>{description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 bg-accent/30 text-primary text-left shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100 duration-400"
              onClick={handleFlip}
            >
              Learn More
            </Button>
          </CardFooter>
        </motion.div>
        <motion.div
          className={`absolute w-full h-full backface-hidden ${
            isFlipped ? "" : "hidden"
          }`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <CardBody className="flex flex-col justify-between h-full">
            <Typography>{moreInfo}</Typography>
            <Button
              ripple={false}
              fullWidth={true}
              className="mt-4 bg-accent/10 text-accent shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
              onClick={handleFlip}
            >
              Back
            </Button>
          </CardBody>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default CardOne;
