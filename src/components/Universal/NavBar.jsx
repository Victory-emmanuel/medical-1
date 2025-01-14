import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-primary px-6 ss:px-12 py-6 ss:mt-8 fixed w-full z-[999]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" mx-auto  flex justify-between items-center">
        {/* Logo */}
        <div className="text-accent text-2xl font-bold">OptiCare</div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="h-6 w-6 text-accent" />
          ) : (
            <FaBars className="h-6 w-6 text-accent" />
          )}
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8 items-center  text-secondary">
          <HashLink smooth to={"/#hero"} className="hover:text-accent">
            Home
          </HashLink>
          <HashLink smooth to={"/#about"} className="hover:text-accent">
            About
          </HashLink>
          <HashLink smooth to={"/#services"} className="hover:text-accent">
            Services
          </HashLink>

          <HashLink smooth to={"/#contact"} className="hover:text-accent">
            Contact
          </HashLink>
          <HashLink smooth to={"/#appiontment"}>
            {" "}
            <button className="bg-accent text-white px-4 py-2 rounded  hover:bg-secondary/70 transition duration-300">
              Book Now
            </button>
          </HashLink>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-primary  text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4  gap-4 py-4 ">
            <HashLink smooth to={"/#hero"} className="hover:text-accent block ">
              Home
            </HashLink>
            <HashLink
              smooth
              to={"/#about"}
              className="hover:text-accent block "
            >
              About
            </HashLink>
            <HashLink
              smooth
              to={"/#services"}
              className="hover:text-accent block "
            >
              Services
            </HashLink>

            <HashLink
              smooth
              to={"/#contact"}
              className="hover:text-accent block "
            >
              Contact
            </HashLink>
            <HashLink smooth to={"/#appiontment"} className="">
              <button className="w-full bg-accent text-white px-4 py-2 mt-4 rounded hover:bg-secondary/70 transition duration-300">
                Book Now
              </button>
            </HashLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
