import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How to apply?",
    answer:
      "Visit the Careers page, fill out the application form with your details, upload your resume, and submit. We review all applications carefully.",
  },
  {
    question: "Do you offer remote roles?",
    answer:
      "Yes, Hydro Bank supports remote work for many positions, especially in tech and marketing teams.",
  },
  {
    question: "What is NDA?",
    answer:
      "NDA stands for Non-Disclosure Agreement, a legal contract to protect confidential information shared during the hiring process.",
  },
  {
    question: "How does equity model work?",
    answer:
      "Hydro Bank offers equity options to eligible employees as part of our compensation, aligning your success with the company’s growth.",
  },
  {
    question: "How soon will I get a response?",
    answer:
      "We aim to respond within 2 weeks after application submission. If shortlisted, you will be contacted for next steps.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className=" w-full bg-black
    "
    >
      <div className="py-16 px-6 max-w-3xl mx-auto text-white">
        <h2 className="text-4xl font-extrabold text-center gradient-primary-text  mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border  rounded-xl overflow-hidden gradient-bg cursor-pointer"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-4 px-6  transition-colors cursor-pointer"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <i
                  className={`fas fa-chevron-down text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-4 text-gray-300"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
