import React from "react";
import { jobList } from "../utils/data";

const JobCard: React.FC = () => {
  return (
    <section id="jobs" className="bg-black py-20 px-8 text-center">
      <h2 className="text-4xl font-extrabold  gradient-primary-text mb-16">
        Open Jobs at Hydro Bank
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="flex flex-col my-6 items-center job-card"
          >
            {/* Card with perfect-fit image */}
            <div
              className="relative overflow-hidden transition-transform border-b-gradient border-[15px] duration-300 hover:scale-105"
              // style={{
              //   border: "16px solid",
              //   borderImage:
              //     "linear-gradient( 59deg, rgba(20, 71, 230, 0.6) 20%,rgba(236, 72, 153,1) 50%, rgba(195, 199, 64, 1) 60%, rgba(6, 182,212, 1) 85% )",
              //   // backgroundColor: "#000",
              //   borderRadius: "16px",
              // }}
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-80 object-cover block"
                style={{ borderRadius: "0" }}
              />
            </div>

            {/* Job title + button */}
            <div className="text-center mt-6  px-4">
              <h3 className="text-white font-extrabold text-2xl mb-6 ">
                {job.title}
              </h3>
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer glow bar */}
      <div className="mt-20 h-1 border-b-2 w-2/3 mx-auto border-b-gradient shadow-lg shadow-cyan-500/30"></div>
    </section>
  );
};

export default JobCard;
