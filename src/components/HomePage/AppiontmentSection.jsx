/* eslint-disable no-undef */

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const currentMonth = Array.from({ length: 35 }, (_, i) => {
  if (i < 3) return { date: i + 30, disabled: true };
  if (i > 31) return { date: i - 31, disabled: true };
  return { date: i - 2, disabled: false };
});

// Get today's date
const today = new Date();
const todayDate = today.getDate(); // Get the current day (1-31)

export default function AppointmentSection() {
  const handleBookNow = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/marketinglot-blog/optical-issues",
    });
  };

  return (
    <section
      id="appiontment"
      className=" bg-secondary py-24 xx:px-6 ss:px-12 h-auto "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 rounded-xl overflow-hidden shadow-xl"
      >
        {/* Calendar Section */}
        <div className="w-full bg-black/70">
          <div className="bg-accent/80 text-white p-4 flex justify-between items-center">
            <Typography variant="h5">JANUARY 2025</Typography>
            <ChevronRightIcon className="h-6 w-6" />
          </div>

          <div className="p-6">
            {/* Days Header */}
            <div className="grid grid-cols-7 mb-4">
              {days.map((day) => (
                <Typography
                  key={day}
                  variant="small"
                  className="text-center font-medium text-primary"
                >
                  {day}
                </Typography>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {currentMonth.map((item, index) => {
                const isToday = item.date === todayDate && !item.disabled; // Check if this is today's date
                return (
                  <div
                    key={index}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center
                      ${
                        isToday
                          ? "bg-accent text-primary font-bold  "
                          : item.disabled
                          ? "text-accent"
                          : "text-primary"
                      }
                    `}
                  >
                    <Typography variant="paragraph">{item.date}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-primary/20 to-white/10"
        >
          <Typography
            variant="h2"
            className="text-primary mb-4 ss:text-5xl text-3xl"
          >
            BOOK YOUR APPOINTMENT
          </Typography>

          <Typography variant="paragraph" className="text-primary mb-8">
            Check out the available dates & make a reservation
          </Typography>

          <Typography variant="paragraph" className="text-primary mb-12">
            Ultricies integer quis auctor elit sed. Dolor sit amet enim an
            consectetur adipiscing do donne in nunc pellentesque arc habitant.
            In aliquam sem fringilla ut morbi pharetra.
          </Typography>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://i.postimg.cc/cCcN46FP/2148196740.jpg"
                alt="Doctor's profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Typography variant="h6" className="text-white">
                DOC EVANGEL SNYDER
              </Typography>
              <Typography variant="small" className="text-white/70">
                Ophthalmologist / Doctor
              </Typography>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={handleBookNow}
            className="mt-8 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition"
          >
            Book Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
