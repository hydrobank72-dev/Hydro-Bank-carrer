import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Certificate from "/certificate.jpg";

const Internships: React.FC = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* 🌟 Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h4 className="mb-4 text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-100 to-blue-400  bg-clip-text text-transparent">
          Welcome
        </h4>
        <h5 className="mb-4 text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-800 to-blue-400  bg-clip-text text-transparent">
          to
        </h5>
        <h1 className="text-4xl md:text-6xl font-extrabold gradient-primary-text  bg-clip-text text-transparent">
          HydroBank Internship Program
        </h1>
      </motion.header>

      {/* 💬 Description */}
      <motion.div
        className="max-w-3xl text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-blue-50 text-lg md:text-2xl font-medium leading-relaxed">
          Join HydroBank’s internship program and work on cutting-edge financial
          technologies. Gain real-world experience, mentorship, and an
          opportunity to shape the future of banking.
        </p>
      </motion.div>

      {/* 🏆 Certificate Section */}
      <motion.section
        className="flex flex-col items-center justify-center gap-4 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-blue-400">
          Certificate of Completion 🏆
        </h2>
        <img
          src={Certificate}
          alt="Internship Certificate Example"
          className="w-full max-w-lg rounded-lg shadow-xl border border-gray-800"
        />
      </motion.section>

      {/* 🚀 Application CTA */}
      <motion.section
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100">
          Apply Now 🚀
        </h2>
        <i className="fa-solid fa-down-long animate-bounce text-3xl text-blue-500"></i>

        <Link
          to="/form"
          className="inline-flex items-center gap-2 gradient-primary hover:opacity-90 transition text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg"
        >
          Application Form
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </Link>
      </motion.section>
    </section>
  );
};

export default Internships;
