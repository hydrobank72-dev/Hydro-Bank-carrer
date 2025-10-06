import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id="home"
      className="relative section  flex items-center justify-center w-full active p-10 max-w-[100rem] mx-auto"
    >
      <div className="grid justify-center md:grid-cols-2 gap-12 my-6 items-center mt-10">
        <div className="text-center md:text-left fade-in">
          <h1 className="text-6xl md:text-8xl font-black hero-logo mb-10 bg-gradient-to-r from-hydro-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Careers at HydroBank
          </h1>
          <p className="text-3xl font-semibold text-slate-600 mb-8">
            Be part of the future of decentralized finance. Explore exciting
            opportunities where innovation meets impact.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
        </div>

        <div className="hidden  md:block">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/programmer-working-on-web-design-on-computers-illustration-svg-download-png-11697962.png"
            alt="Careers at HydroBank"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
