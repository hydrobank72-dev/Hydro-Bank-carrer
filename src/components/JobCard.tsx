import React from "react";

interface Job {
  id: number;
  title: string;
  image: string;
  link: string;
}

const JobCard: React.FC = () => {
  const jobList: Job[] = [
    { id: 1, title: "Frontend Developer", image: "./src/assets/frontend.jpg", link: "./pages/form/form.html" },
    { id: 2, title: "App Developer", image: "./src/assets/appdevelopment.jpg", link: "./pages/form/form.html" },
    { id: 3, title: "Blockchain Engineer", image: "./src/assets/blockchain.jpg", link: "./pages/form/form.html" },
    { id: 4, title: "AI / ML Engineer", image: "./src/assets/ai-ml.jpg", link: "./pages/form/form.html" },
    { id: 5, title: "Deep Learning", image: "./src/assets/deeplearning.jpg", link: "./pages/form/form.html" },
    { id: 6, title: "Data Scientist", image: "./src/assets/data-scientist.jpg", link: "./pages/form/form.html" },
    { id: 7, title: "HR Manager", image: "./src/assets/hr-team.jpg", link: "./pages/form/form.html" },
    { id: 8, title: "Marketing Specialist", image: "./src/assets/marketing-team.jpg", link: "./pages/form/form.html" },
    { id: 9, title: "Product Team", image: "./src/assets/product-team.jpg", link: "./pages/form/form.html" },
  ];

  return (
    <section className="bg-black py-20 px-8 text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-16">
        Open Positions
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobList.map((job) => (
          <div key={job.id} className="flex flex-col items-center job-card">
            {/* Card with image */}
            <div
              className="relative overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{
                border: "16px solid",
                borderImage: "linear-gradient(90deg, #00fafa, #8d23ff) 1",
                backgroundColor: "#000",
                borderRadius: "16px",
              }}
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-80 object-cover block"
                style={{ borderRadius: "0" }}
              />
            </div>

            {/* Job title + stacked buttons */}
            <div className="text-center mt-6 px-4 flex flex-col gap-3 items-center">
              <h3 className="text-white font-extrabold text-2xl">{job.title}</h3>

              

              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="learn-btn"
              >
                Learn More
              </a>
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
      <div className="footer-glow"></div>
    </section>
  );
};

export default JobCard;
