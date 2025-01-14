import { motion } from "framer-motion";
import { Typography, Button } from "@material-tailwind/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FooterSection = () => {
  const links = [
    { name: "Home", path: "/" }, // Regular link
    { name: "Services", path: "/#services", isHashLink: true }, // HashLink for smooth scrolling
    { name: "About", path: "/#about", isHashLink: true }, // HashLink for smooth scrolling
    { name: "Shop", path: "/shop" }, // Regular link
  ];

  return (
    <footer className="bg-secondary text-white py-16 px-6 ss:px-12">
      <div className=" mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3  gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src="/path-to-your-logo.png"
              alt="Brand Logo"
              className="h-12 mb-4"
            />
            <Typography className="mb-4">
              We are dedicated to providing innovative solutions and exceptional
              service to our clients.
            </Typography>
            <div className="flex space-x-4">
              <Button variant="text" className="p-2">
                <FaFacebookF className="text-white" />
              </Button>
              <Button variant="text" className="p-2">
                <FaTwitter className="text-white" />
              </Button>
              <Button variant="text" className="p-2">
                <FaInstagram className="text-white" />
              </Button>
              <Button variant="text" className="p-2">
                <FaLinkedinIn className="text-white" />
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <Typography variant="h6" className="mb-4 text-accent">
              Quick Links
            </Typography>
            <ul className="space-y-2 flex-col flex">
              {links.map((link, index) =>
                link.isHashLink ? (
                  <HashLink
                    key={index}
                    to={link.path}
                    smooth
                    className="text-primary hover:text-accent md:pb-2 font-medium   cursor duration-300"
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-primary hover:text-accent md:pb-2 font-medium   cursor duration-300"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <Typography variant="h6" className="mb-4 text-accent">
              Contact Us
            </Typography>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <Typography>info@example.com</Typography>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <Typography>+1 (123) 456-7890</Typography>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-white/20 xs:text-center text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Typography>
            &copy; 2024{" "}
            <span className="text-purple-300 font-semibold">CodeSquid</span> .
            All rights reserved.
          </Typography>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
