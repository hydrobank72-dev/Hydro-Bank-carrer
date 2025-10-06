import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-100 p-6 mt-12 font-bold text-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-hydro-blue font-bold">
          Copyright @HydroBank 2025
        </div>
        <div className="font-bold text-slate-800">
          Email at:
          <a
            href="mailto:careers@hydrobank.com"
            className="text-hydro-blue font-semibold"
          >
            {" "}
            hydrobank72@gmail.com
          </a>
        </div>
        <div className="flex space-x-4 text-2xl">
          <a
            href="https://x.com/hydrobank72"
            target="_blank"
            className="text-gray-600 hover:text-hydro-blue"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/hydrobank_luxury"
            target="_blank"
            className="text-gray-600 hover:text-hydro-blue"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
