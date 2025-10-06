import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <section id="faq" className="section p-8 max-w-3xl mx-auto fade-in">
      <h2 className="text-hydro-blue font-bold text-4xl mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="border-b border-gray-300">
          <button
            className="faq-question w-full text-left py-4 pr-4 flex justify-between items-center"
            //   onclick="toggleFAQ(this)"
          >
            <span>How to apply?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="answer px-4 pb-4 hidden">
            Visit the Careers page, fill out the application form with your
            details, upload your resume, and submit. We review all applications
            carefully.
          </div>
        </div>
        <div className="border-b border-gray-300">
          <button
            className="faq-question w-full text-left py-4 pr-4 flex justify-between items-center"
            //   onclick="toggleFAQ(this)"
          >
            <span>Do you offer remote roles?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="answer px-4 pb-4 hidden">
            Yes, Hydro Bank supports remote work for many positions, especially
            in tech and marketing teams.
          </div>
        </div>
        <div className="border-b border-gray-300">
          <button
            className="faq-question w-full text-left py-4 pr-4 flex justify-between items-center"
            //   onclick="toggleFAQ(this)"
          >
            <span>What is NDA?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="answer px-4 pb-4 hidden">
            NDA stands for Non-Disclosure Agreement, a legal contract to protect
            confidential information shared during the hiring process.
          </div>
        </div>
        <div className="border-b border-gray-300">
          <button
            className="faq-question w-full text-left py-4 pr-4 flex justify-between items-center"
            //   onclick="toggleFAQ(this)"
          >
            <span>How does equity model work?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="answer px-4 pb-4 hidden">
            Hydro Bank offers equity options to eligible employees as part of
            our compensation, aligning your success with the company’s growth.
          </div>
        </div>
        <div className="border-b border-gray-300">
          <button
            className="faq-question w-full text-left py-4 pr-4 flex justify-between items-center"
            //   onclick="toggleFAQ(this)"
          >
            <span>How soon will I get a response?</span>
            <i className="fas fa-chevron-down"></i>
          </button>
          <div className="answer px-4 pb-4 hidden">
            We aim to respond within 2 weeks after application submission. If
            shortlisted, you will be contacted for next steps.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
