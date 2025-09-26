// Utility
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// SECTION SWITCHER
function showSection(sectionId) {
  $$(".section").forEach((sec) => sec.classList.remove("active"));
  $(`#${sectionId}`).classList.add("active");

  // Update nav active state
  $$(".nav-link").forEach((link) =>
    link.classList.remove("text-hydro-blue", "border-b-2", "border-hydro-blue")
  );
  const activeLink = $(`.nav-link[data-section="${sectionId}"]`);
  activeLink?.classList.add(
    "text-hydro-blue",
    "border-b-2",
    "border-hydro-blue"
  );
}

// Nav links (delegated)
$$(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// HERO LOGO → Home
$(".hero-logo").addEventListener("click", () => showSection("home"));

// FAQ ACCORDION
$$(".faq-question").forEach((btn) =>
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
    btn.querySelector("i")?.classList.toggle("fa-chevron-up");
    btn.querySelector("i")?.classList.toggle("fa-chevron-down");
  })
);

// DRAG & DROP FILE UPLOAD
const dropArea = $("#dragDropArea");
const fileInput = $("#resume");
const fileNameDiv = $("#fileName");

["click", "dragover", "dragleave", "drop"].forEach((event) => {
  dropArea.addEventListener(event, (e) => {
    e.preventDefault();
    if (event === "click") fileInput.click();
    if (event === "dragover") dropArea.classList.add("drag-over");
    if (event === "dragleave") dropArea.classList.remove("drag-over");
    if (event === "drop") {
      dropArea.classList.remove("drag-over");
      handleFile(e.dataTransfer.files[0]);
    }
  });
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) handleFile(fileInput.files[0]);
});

function handleFile(file) {
  fileInput.files = new DataTransfer().items.add(file).files;
  fileNameDiv.textContent = file.name;
  fileNameDiv.classList.remove("hidden");
}

// FORM SUBMISSION
// $("#applicationForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);

//   if (!validateForm(formData)) return;

//   $("#successMessage").classList.remove("hidden");
//   console.log("Form submitted:", Object.fromEntries(formData));

//   e.target.reset();
//   fileNameDiv.classList.add("hidden");
// });

$("#applicationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  if (!validateForm(formData)) return;

  const applicant = {
    name: formData.get("name"),
    email: formData.get("email"),
    whatsapp: formData.get("whatsapp"),
    role: formData.get("role"),
    skills: formData.get("skills"),
    portfolio: formData.get("portfolio"),
    message: formData.get("message"),
    nda: formData.get("nda") ? "Agreed" : "Not agreed",
    submittedAt: new Date().toLocaleString(),
  };

  let applications = JSON.parse(localStorage.getItem("applications")) || [];

  applications.push(applicant);

  localStorage.setItem("applications", JSON.stringify(applications));

  $("#successMessage").classList.remove("hidden");

  e.target.reset();

  fileNameDiv.classList.add("hidden");

  console.log("Application stored:", applicant);
});

function validateForm(fd) {
  if (!fd.get("name") || !fd.get("email") || !fd.get("whatsapp")) {
    alert("Please fill in all required fields.");
    return false;
  }
  if (!fd.get("nda")) {
    alert("You must agree to the NDA.");
    return false;
  }
  return true;
}
