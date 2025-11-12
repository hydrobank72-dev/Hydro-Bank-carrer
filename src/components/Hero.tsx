import React from "react";
import { motion } from "framer-motion";
import SideImage from "/product-team.jpg";

// import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="gradient-primary-text">HYDROBANK</span>{" "}
            <span className="text-white">Careers</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            Find your next job at Hydro Bank.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              href="#jobs"
              whileHover={{ scale: 1.05 }}
              className="apply-btn inline-block font-semibold text-white py-3 px-10 rounded-full text-lg transition-transform duration-300"
            >
              Explore Jobs
            </motion.a>

            <motion.a
              href="internships"
              whileHover={{ scale: 1.05 }}
              className="apply-btn inline-block font-semibold text-white py-3 px-10 rounded-full text-lg transition-transform duration-300"
            >
              Internships
            </motion.a>

            <motion.a
              href="form"
              whileHover={{ scale: 1.05 }}
              className="apply-btn inline-block font-semibold text-white py-3 px-10 rounded-full text-lg  transition-transform duration-300"
            >
              Apply Now
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-1 rounded-2xl bg-gradient-to-tr from-cyan-400 via-pink-500 to-yellow-300">
            <img
              src={SideImage}
              alt="Hydro Bank Illustration"
              className="rounded-2xl w-[340px] md:w-[420px]"
            />
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mt-16 h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 w-3/4 mx-auto rounded-full"></div>

      {/* Why Choose Section */}
      <motion.div
        className="text-center mt-16 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold gradient-primary-text mb-4">
          Why Choose Hydro Bank?
        </h2>
        <p className="text-gray-300 text-2xl leading-relaxed font-outfit">
          We’re shaping the next generation of banking — one that’s fast, human,
          and visionary. At Hydro Bank, you’ll work with talented creators,
          engineers, and designers who share one goal: to make finance simple
          and beautiful.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
