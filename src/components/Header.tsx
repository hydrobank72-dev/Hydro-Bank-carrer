import Logo from "../assets/hydrobank.jpeg";

const Header = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 border-b-[5px] border-b-gradient top-0 sticky z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-14 h-14 rounded-full" />
          <h1 className=" font-bold text-2xl text-blue-500">HYDROBANK</h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10">
          {["Home", "About", "FAQ", "Jobs", "Internship"].map((item) => (
            <li
              key={item}
              className="group relative cursor-pointer font-semibold"
            >
              <span className="text-white text-xl">{item}</span>
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full"></span>
          <span className="w-6 h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full"></span>
          <span className="w-6 h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
