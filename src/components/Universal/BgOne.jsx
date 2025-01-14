import { motion } from "framer-motion";
import {
  FaEye,
  FaGlasses,
  FaBriefcaseMedical,
  FaHeartbeat,
  FaCapsules,
} from "react-icons/fa";

const BgOne = () => {
  const icons = [
    { Icon: FaEye, size: 50, color: "#0081B8" },
    { Icon: FaGlasses, size: 40, color: "#001D29" },
    { Icon: FaBriefcaseMedical, size: 60, color: "#EBF9FF" },
    { Icon: FaHeartbeat, size: 50, color: "#0081B8" },
    { Icon: FaCapsules, size: 40, color: "#001D29" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
          animate={{
            x: ["-20%", "20%"],
            y: ["-10%", "10%"],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <item.Icon size={item.size} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
};

export default BgOne;
