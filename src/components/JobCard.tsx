import React from "react";

type Props = {};

const JobCard = (props: Props) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-6">
      <div className="grid grid-cols-1 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Frontend Developer
          </h3>
          <p className="text-gray-600 mb-4">
            Build sleek, responsive user interfaces with React and modern
            JavaScript.
          </p>
          <div className="w-full mt-2">
            <a
              href="./pages/form/form.html"
              target="_blank"
              className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </a>

            <span className="tooltiptext">
              Focus on UI/UX, mobile-first design, and integration with backend
              APIs. Ideal for creative minds.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Backend Developer
          </h3>
          <p className="text-gray-600 mb-4">
            Develop robust APIs and services with Node.js and scalable
            databases.
          </p>
          <div className="w-full mt-2">
            <span className="tooltiptext">
              Emphasize security, performance, and microservices architecture
              for fintech solutions.
            </span>
            <a
              href="./pages/form/form.html"
              target="_blank"
              className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Blockchain Engineer
          </h3>
          <p className="text-gray-600 mb-4">
            Design and implement blockchain infrastructure for secure
            transactions.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Work on decentralized networks, consensus algorithms, and
              integration with finance systems.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Solidity Developer
          </h3>
          <p className="text-gray-600 mb-4">
            Write secure smart contracts on Ethereum and other blockchains.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Specialize in contract logic, security audits, and DeFi
              applications.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            AI/ML Engineer
          </h3>
          <p className="text-gray-600 mb-4">
            Create intelligent models to drive finance innovation with Python
            and TensorFlow.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Leverage machine learning for risk assessment, predictive
              analytics, and automated decision-making.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Data Scientist
          </h3>
          <p className="text-gray-600 mb-4">
            Analyze data to uncover actionable insights for strategic decisions.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Use statistical models and big data tools to enhance financial
              services and user experience.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Data Analyst
          </h3>
          <p className="text-gray-600 mb-4">
            Interpret complex datasets to support financial insights and
            operations.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Focus on ETL processes, data visualization, and reporting for
              executive teams.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            HR Manager
          </h3>
          <p className="text-gray-600 mb-4">
            Manage talent acquisition, employee relations, and HR policies.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Oversee recruitment, onboarding, and culture-building in a
              fast-paced fintech environment.
            </span>
          </div>
        </div>
        <div className="job-card bg-white flex items-start gap-2 justify-center flex-col rounded-lg shadow-lg py-6 px-4 border rounded-xl border-gray-200 tooltip">
          <h3 className="text-slate-800 text-hydro-blue font-bold text-xl mb-2">
            Marketing Specialist
          </h3>
          <p className="text-gray-600 mb-4">
            Drive brand growth, customer engagement, and marketing campaigns.
          </p>
          <a
            href="./pages/form/form.html"
            target="_blank"
            className="gradient-btn font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </a>
          <div className="tooltip mt-2">
            <span className="tooltiptext">
              Develop digital strategies, content creation, and analytics for
              global reach.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCard;
