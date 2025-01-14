import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black py-24 px-6 ss:px-12  flex flex-col lg:flex-row h-auto items-center gap-8"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2  w-full h-auto"
      >
        <img
          src="https://i.postimg.cc/wxZHrDyx/2148273184.jpg"
          alt="Eye Care Professional"
          className="rounded-lg shadow-lg mr-auto"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Our
          <span className="text-accent ml-2">Mission</span>
        </h2>
        <p className="text-white mb-8">
          We believe that everyone deserves to see the world clearly. That’s why
          we’ve made it our mission to provide patients with the best eye
          doctors, the most thorough eye health exams, and a wide selection of
          eyewear delivered with the personal attention you deserve.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-accent text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-primary">
                We’re Certified
              </h4>
              <p className="text-white">
                Certified by the Government for excellence in Ophthalmic
                Technology.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-accent text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-primary">
                20 Years Of Experience
              </h4>
              <p className="text-white">
                Community health and vision care for over 20 years.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-accent text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-primary">
                Expert Doctors
              </h4>
              <p className="text-white">
                You will be treated with friendly & compassionate care.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-accent text-2xl" />
            <div>
              <h4 className="text-xl font-semibold text-primary">
                Excellent Services
              </h4>
              <p className="text-white">
                Today, we fit into the perfect frame of services for everyone.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
