import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="gradient-bg mt-16 py-8 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-evenly items-center gap-6">
        {/* Left - Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-row items-center justify-start gap-2 md:text-left text-blue-100 "
        >
          {" "}
          © {new Date().getFullYear()}
          <span className="font-semibold text-lg text-blue-400">HydroBank</span>
          <p className="text-sm text-white">All rights reserved.</p>
        </motion.div>

        {/* Middle - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <span className="text-white font-medium">Email:</span>{" "}
          <a
            href="mailto:careers@hydrobank.com"
            className="text-cyan-400 font-semibold hover:text-fuchsia-400 transition-colors"
          >
            hydrobank72@gmail.com
          </a>
        </motion.div>

        {/* Right - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center space-x-5 text-2xl"
        >
          <a
            href="https://x.com/hydrobank72"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-cyan-400 transition-colors"
            aria-label="Twitter / X"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/hydrobank_luxury"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-fuchsia-400 transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
