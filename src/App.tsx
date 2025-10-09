import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";

function App() {
  return (
    <div className="gradient-bg">
      <Header />
      <Hero />
      <JobCard />
      <CTA />
      <About />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
