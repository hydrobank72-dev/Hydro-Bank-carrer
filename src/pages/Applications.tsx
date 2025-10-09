import React, { useState, useEffect } from "react";
import type { Application } from "../types";

const SECRET_KEY = "hydroteam999";

const Applications: React.FC = () => {
  const [accessKey, setAccessKey] = useState<string>("");
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [applications, setApplications] = useState<Application[]>([]);

  const checkAccess = () => {
    if (accessKey === SECRET_KEY) {
      setAuthorized(true);
      loadApplications();
    } else {
      alert("❌ Wrong key! Access denied.");
    }
  };

  const loadApplications = () => {
    const storedData = localStorage.getItem("applications");
    const parsedData: Application[] = storedData ? JSON.parse(storedData) : [];
    setApplications(parsedData);
  };

  // Optional: Load applications if already logged in earlier
  useEffect(() => {
    if (authorized) {
      loadApplications();
    }
  }, [authorized]);

  return (
    <section className="max-w-7xl mx-auto p-6 bg-black text-white min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">
          🔒 Team Access — Applications
        </h2>

        {/* Login View */}
        {!authorized && (
          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <p className="text-gray-300">Enter Access Key:</p>
            <input
              type="password"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              placeholder="Enter key"
              className="w-full px-4 py-2 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              onClick={checkAccess}
              className="w-full py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded font-semibold hover:opacity-90 transition"
            >
              Login
            </button>
          </div>
        )}

        {/* Table View */}
        {authorized && (
          <div className="w-full mt-10 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">
              📋 Stored Applications ({applications.length})
            </h3>

            {applications.length === 0 ? (
              <p className="text-gray-400">No applications found.</p>
            ) : (
              <table className="w-full text-sm border border-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-neutral-800 text-gray-300">
                  <tr>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Email</th>
                    <th className="p-2 text-left">WhatsApp</th>
                    <th className="p-2 text-left">Role</th>
                    <th className="p-2 text-left">Skills</th>
                    <th className="p-2 text-left">Portfolio</th>
                    <th className="p-2 text-left">Message</th>
                    <th className="p-2 text-left">NDA</th>
                    <th className="p-2 text-left">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-800 hover:bg-neutral-900"
                    >
                      <td className="p-2">{app.name}</td>
                      <td className="p-2">{app.email}</td>
                      <td className="p-2">{app.whatsapp}</td>
                      <td className="p-2">{app.role}</td>
                      <td className="p-2">{app.skills}</td>
                      <td className="p-2">
                        <a
                          href={app.portfolio}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 underline hover:text-fuchsia-400"
                        >
                          View
                        </a>
                      </td>
                      <td className="p-2">{app.message}</td>
                      <td className="p-2">{app.nda}</td>
                      <td className="p-2">{app.submittedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Applications;
