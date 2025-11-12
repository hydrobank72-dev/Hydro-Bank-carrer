import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-black ">
      <div className="bg-black px-6 max-w-5xl mx-auto text-center text-gray-50">
        {/* Logo & Tagline */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* TODO: Add Logo */}

          {/* <img
            src={Logo}
            className="w-[500px]  rounded-lg shadow-xl shadow-cyan-500/20"
            alt="HydroBank Logo"
          /> */}
          <h2 className="text-4xl font-extrabold  gradient-primary-text mb-16">
            About Us
          </h2>
          <span className="text-2xl italic">
            Powering the Future of Digital Banking
          </span>
        </motion.div>

        {/* Vision / Mission / Goals */}
        <div className="space-y-10 text-left ">
          {[
            {
              title: "Our Vision",
              text: "Hydro Bank’s vision is to make banking simple, secure, and accessible for everyone. We believe in financial freedom, instant transactions, and a world where money moves as fast as ideas.",
            },
            {
              title: "Our Mission",
              text: "To replace traditional barriers in banking with borderless transactions. To provide a safe, transparent, and user-friendly financial ecosystem. To empower individuals and businesses with modern digital tools.",
            },
            {
              title: "Our Goals",
              text: "Build a global digital bank that everyone can access. Enable fast & secure payments with Hydro Coin and other financial tools. Create an ecosystem that supports AI, blockchain, and fintech innovation.",
            },
            {
              title: "Why Us?",
              text: "🔒 Secure – End-to-end encryption, user data privacy. ⚡ Fast – Instant, borderless transactions. 🌍 Global – Accessible anywhere, anytime. 💡 Innovative – Driven by AI & blockchain technology.",
            },
            {
              title: "Our Values",
              text: "🤝 Trust – We put customers first. 🪞 Transparency – Open and honest communication. 🌱 Growth – Empowering users to achieve financial freedom.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-lg text-white font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Structure */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 gradient-primary-text">
            Team Structure
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: "fa-network-wired",
                title: "Blockchain",
                text: "Experts building decentralized ledgers and smart contracts.",
              },
              {
                icon: "fa-brain",
                title: "AI/ML",
                text: "Data scientists and engineers crafting intelligent models.",
              },
              {
                icon: "fa-chart-line",
                title: "Data Science",
                text: "Analysts turning data into strategic insights.",
              },
              {
                icon: "fa-shield-alt",
                title: "Security",
                text: "Guardians ensuring platform safety and compliance.",
              },
              {
                icon: "fa-bullhorn",
                title: "Marketing",
                text: "Creative minds driving brand awareness and growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="gradient-bg rounded-xl shadow-md hover:shadow-cyan-400/30 transition-shadow p-6 text-center"
              >
                <i className={`fas ${item.icon} fa-3x text-white mb-4`}></i>
                <h4 className="font-bold text-blue-400 mb-2">{item.title}</h4>
                <p className="text-white text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg">
            Contact us at{" "}
            <a
              href="mailto:careers@hydrobank.com"
              className="text-cyan-500 font-semibold hover:underline"
            >
              careers@hydrobank.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-2xl">
            <a
              href="https://x.com/hydrobank72"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
