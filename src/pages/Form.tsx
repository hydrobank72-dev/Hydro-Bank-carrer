import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { FormData } from "../types";
// import Logo from "./hydrobank-text-logo.jpg";
import Logo from "/hydrobank-text-logo.jpg";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    role: "",
    skills: "",
    portfolio: "",
    message: "",
    nda: false,
    resume: null,
  });

  const [fileName, setFileName] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      setFormData({ ...formData, resume: file });
      setFileName(file.name);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🕒 Add submission timestamp
    const submission = {
      ...formData,
      submittedAt: new Date().toLocaleString(),
    };

    // 📦 Get existing applications
    const storedApplications = localStorage.getItem("applications");
    const applications = storedApplications
      ? JSON.parse(storedApplications)
      : [];

    // 📝 Add new one
    applications.push(submission);

    // 💾 Save back to localStorage
    localStorage.setItem("applications", JSON.stringify(applications));

    console.log("✅ Form submitted & saved:", submission);

    // 🎉 Show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);

    // 🧼 Reset form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      role: "",
      skills: "",
      portfolio: "",
      message: "",
      nda: false,
      resume: null,
    });
    setFileName("");
  };

  return (
    <section className=" bg-white w-full min-h-screen flex flex-col items-center py-12 px-4 ">
      {/* Header */}
      <motion.div
        className="flex flex-col items-center mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={Logo}
            alt="HydroBank Logo"
            className="w-[280px] md:w-[380px] rounded-full shadow-lg"
          />
          {/* <span className="text-3xl md:text-6xl font-black text-blue-500 tracking-wide">
            HYDROBANK
          </span> */}
        </div>
        <p className="mt-3 text-lg md:text-2xl text-blue-400 max-w-xl">
          Join the future of decentralized crypto banking powered by Web3 🚀
        </p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 rounded-2xl shadow-2xl p-8 w-full max-w-4xl space-y-6"
      >
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">
            <i className="fa-solid fa-user text-blue-500 mr-2"></i> Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">
            <i className="fa-solid fa-envelope text-blue-500 mr-2"></i> Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="block font-semibold mb-2">
            <i className="fa-brands fa-whatsapp text-green-500 mr-2"></i>{" "}
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block font-semibold mb-2">
            <i className="fa-solid fa-briefcase text-blue-500 mr-2"></i> Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          >
            <option value="">Select a Role</option>
            <optgroup label="Engineering">
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Blockchain Engineer</option>
              <option>Solidity Developer</option>
              <option>AI/ML Engineer</option>
              <option>Data Scientist</option>
              <option>Data Analyst</option>
            </optgroup>
            <optgroup label="Business">
              <option>HR Manager</option>
              <option>Marketing Specialist</option>
            </optgroup>
          </select>
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block font-semibold mb-2">
            <i className="fa-solid fa-code text-blue-500 mr-2"></i> Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            rows={2}
            placeholder="e.g., React, Python, Solidity"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        {/* Portfolio */}
        <div>
          <label htmlFor="portfolio" className="block font-semibold mb-2">
            <i className="fa-solid fa-globe text-blue-500 mr-2"></i> Portfolio /
            GitHub
          </label>
          <input
            id="portfolio"
            name="portfolio"
            type="url"
            placeholder="https://github.com/username"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-semibold mb-2">
            <i className="fa-solid fa-file-arrow-up text-blue-500 mr-2"></i>
            Upload Resume
          </label>
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
          >
            <p className="text-gray-500">
              Drag & drop your resume here or click to upload
            </p>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            />
          </div>
          {fileName && (
            <div className="mt-2 text-blue-500 font-semibold">{fileName}</div>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            <i className="fa-solid fa-message text-blue-500 mr-2"></i> Short
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us why you're interested in HydroBank..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        {/* NDA */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="nda"
            id="nda"
            checked={formData.nda}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="nda" className="font-semibold">
            I agree to the{" "}
            <a href="#" className="text-blue-500 underline">
              NDA
            </a>
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Your data will only be used for recruitment purposes.
        </p>

        {/* Success Message */}
        {success && (
          <motion.div
            className="w-full mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🎉 Thank you for applying! We’ll get back to you within 14 days.
          </motion.div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-8 rounded-full font-bold text-white gradient-primary hover:opacity-90 transition cursor-pointer"
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>
            Submit Application
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
