import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      id="header"
      className="bg-white/80 backdrop-blur-md p-4 shadow-md sticky top-0 z-20"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="cursor-pointer flex items-center gap-3"
          //     onclick={() => null}
        >
          <img
            src="/assets/logo.jpg"
            alt="HydroBank"
            className="w-12 rounded-full shadow-md ring-2 ring-hydro-blue/50"
          />
          <span className="text-hydro-blue font-black font-mono text-2xl tracking-wider">
            HYDROBANK
          </span>
        </div>

        <ul className="flex space-x-8 text-lg font-semibold items-center">
          <li>
            <a
              href="#"
              className="nav-link hover:text-hydro-blue"
              data-section="home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link hover:text-hydro-blue"
              data-section="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link hover:text-hydro-blue"
              data-section="faq"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="./pages/form/form.html"
              className="font-bold hover:text-hydro-blue"
            >
              Jobs
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="./pages/intern/internship.html"
              className="font-bold hover:text-hydro-blue"
            >
              Internship
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="./pages/applications/applications.html"
              className="font-bold hover:text-hydro-blue"
            >
              Team Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
