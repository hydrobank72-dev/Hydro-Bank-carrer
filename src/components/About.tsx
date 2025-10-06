import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="section p-8 max-w-4xl mx-auto fade-in">
      <div className="w-full flex items-center justify-center flex-col gap-2 my-4">
        <img
          src="./assets/logo.jpg"
          className="w-40 mx-auto rounded-full"
          alt="HydroBank"
        />
        <span className="text-2xl text-slate-600 italic">
          Powering the Future of Digital Banking
        </span>
      </div>

      {/* <!-- <h2 className="my-4 text-4xl text-slate-500">
            About
        </h2> --> */}
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl text-slate-800 font-semibold mb-4">
          Our Vision
        </h3>
        <p className="text-lg mb-6 text-slate-600 font-bold">
          Our Vision Hydro Bank’s vision is to make banking simple, secure, and
          accessible for everyone. We believe in financial freedom, instant
          transactions, and a world where money moves as fast as ideas.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl font-semibold mb-4">
          Our Mission
        </h3>
        <p className="text-lg mb-6 text-slate-600 font-bold">
          Our Mission To replace traditional barriers in banking with borderless
          transactions. To provide a safe, transparent, and user-friendly
          financial ecosystem. To empower individuals and businesses with modern
          digital tools.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl font-semibold mb-4">
          Our Goals
        </h3>
        <p className="text-lg mb-6 text-slate-600 font-bold">
          Our Goals Build a global digital bank that everyone can access. Enable
          fast & secure payments with Hydro Coin and other financial tools.
          Create an ecosystem that supports AI, blockchain, and fintech
          innovation.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl font-semibold mb-4">Why We?</h3>
        <p className="text-lg mb-6 text-slate-600 font-bold">
          Secure – End-to-end encryption, user data privacy. ⚡ Fast – Instant,
          borderless transactions. 🌍 Global – Accessible anywhere, anytime. 💡
          Innovative – Driven by AI & blockchain technology.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl font-semibold mb-4">
          Our Values
        </h3>
        <p className="text-lg mb-6 text-slate-600 font-bold">
          Our Values Trust – We put customers first. Transparency – Open,
          honest, and clear communication. Growth – Empowering users to achieve
          financial freedom.
        </p>
      </div>
      <div className="mb-12">
        <h3 className="text-slate-800 text-2xl font-semibold mb-4">
          Team Structure
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="fas fa-network-wired fa-4x text-hydro-blue mb-4"></i>
            <h4 className="font-bold">Blockchain</h4>
            <p className="text-gray-600">
              Experts building decentralized ledgers and smart contracts.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="fas fa-brain fa-4x text-hydro-blue mb-4"></i>
            <h4 className="font-bold">AI/ML</h4>
            <p className="text-gray-600">
              Data scientists and engineers crafting intelligent models.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="fas fa-chart-line fa-4x text-hydro-blue mb-4"></i>
            <h4 className="font-bold">Data Science</h4>
            <p className="text-gray-600">
              Analysts turning data into strategic insights.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="fas fa-shield-alt fa-4x text-hydro-blue mb-4"></i>
            <h4 className="font-bold">Security</h4>
            <p className="text-gray-600">
              Guardians ensuring platform safety and compliance.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="fas fa-bullhorn fa-4x text-hydro-blue mb-4"></i>
            <h4 className="font-bold">Marketing</h4>
            <p className="text-gray-600">
              Creative minds driving brand awareness and growth.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg">
          Contact us at:{" "}
          <a
            href="mailto:careers@hydrobank.com"
            className="text-hydro-blue font-semibold"
          >
            careers@hydrobank.com
          </a>
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://x.com/hydrobank72"
            target="_blank"
            className="text-gray-600 text-2xl hover:text-hydro-blue"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 text-2xl hover:text-hydro-blue">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
