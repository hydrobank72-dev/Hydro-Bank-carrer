const form = document.getElementById("applicationForm");
const successMsg = document.getElementById("successMessage");
const dropArea = document.getElementById("dragDropArea");
const fileInput = document.getElementById("resume");
const fileNameDiv = document.getElementById("fileName");

// File upload
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
  fileNameDiv.textContent = file.name;
  fileNameDiv.style.display = "block";
}

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.style.display = "block";
  form.reset();
  fileNameDiv.style.display = "none";
});
