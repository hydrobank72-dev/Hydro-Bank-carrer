function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.remove("active");
  });
  document.getElementById(sectionId).classList.add("active");
  // Update active nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("text-hydro-blue", "border-b-2", "border-hydro-blue");
  });
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("text-hydro-blue", "border-b-2");
  }
}

// Nav Click Events
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = e.target.getAttribute("data-section");
    showSection(section);
  });
});

// FAQ Accordion
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  answer.classList.toggle("hidden");
  const icon = button.querySelector("i");
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");
}

// Drag and Drop
const dropArea = document.getElementById("dragDropArea");
const fileInput = document.getElementById("resume");
const fileNameDiv = document.getElementById("fileName");

dropArea.addEventListener("click", () => fileInput.click());

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("drag-over");
});

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("drag-over");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("drag-over");
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    fileNameDiv.textContent = files[0].name;
    fileNameDiv.classList.remove("hidden");
  }
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileNameDiv.textContent = fileInput.files[0].name;
    fileNameDiv.classList.remove("hidden");
  }
});

// Form Submission
document.getElementById("applicationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Simple validation
  const formData = new FormData(e.target);
  if (validateForm(formData)) {
    // Show success message
    const successMsg = document.getElementById("successMessage");
    successMsg.classList.remove("hidden");
    // Optional: Send to backend (simulate)
    console.log("Form submitted:", Object.fromEntries(formData));
    // Reset form
    e.target.reset();
    fileNameDiv.classList.add("hidden");
  }
});

function validateForm(formData) {
  // Basic validation
  if (
    !formData.get("name") ||
    !formData.get("email") ||
    !formData.get("whatsapp")
  ) {
    alert("Please fill in all required fields.");
    return false;
  }
  if (!formData.get("nda")) {
    alert("You must agree to the NDA.");
    return false;
  }
  return true;
}
