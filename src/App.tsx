import "./App.css";
import About from "./components/About";
import CTA from "./components/CTA";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JobCard from "./components/JobCard";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <JobCard />
                <CTA />
                <About />
                <Faq />
              </>
            }
          />

          <Route path="/applications" element={<Applications />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
