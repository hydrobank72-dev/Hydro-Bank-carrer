const SECRET_KEY = "hydroteam999"; // <-- change this key

function checkAccess() {
  const enteredKey = document.getElementById("accessKey").value;
  if (enteredKey === SECRET_KEY) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("appData").classList.remove("hidden");
    loadApplications();
  } else {
    alert("Wrong key! Access denied.");
  }
}

function loadApplications() {
  let applications = JSON.parse(localStorage.getItem("applications")) || [];
  const tableBody = document.getElementById("applicationsTable");
  tableBody.innerHTML = "";

  applications.forEach((app) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${app.name}</td>
      <td>${app.email}</td>
      <td>${app.whatsapp}</td>
      <td>${app.role}</td>
      <td>${app.skills}</td>
      <td>${app.portfolio}</td>
      <td>${app.message}</td>
      <td>${app.nda}</td>
      <td>${app.submittedAt}</td>
    `;
    tableBody.appendChild(row);
  });
}
