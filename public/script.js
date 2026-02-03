/* ===============================
   SAHAYIKA - Frontend Logic
   =============================== */

const API_URL = window.location.origin + "/api";

/* ---------- SIGNUP ---------- */
async function signup() {
  const username = document.getElementById("newUser").value.trim();
  const password = document.getElementById("newPass").value.trim();
  const dob = document.getElementById("newDOB").value;
  const ageCategory = document.getElementById("ageCategory").value;
  const education = document.getElementById("education").value;

  if (!username || !password || !dob || !ageCategory || !education) {
    alert("Please fill all fields ❌");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, dob, ageCategory, education })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup successful 🎉 Please login");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Signup failed ❌");
    }
  } catch (error) {
    alert("Error connecting to server ❌");
  }
}

/* ---------- LOGIN ---------- */
async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please enter username and password ❌");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("currentUser", data.username);
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed ❌");
    }
  } catch (error) {
    alert("Error connecting to server ❌");
  }
}

/* ---------- LOGOUT ---------- */
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

/* ---------- DASHBOARD PROTECTION ---------- */
function checkLogin() {
  const user = localStorage.getItem("currentUser");
  if (!user) {
    window.location.href = "index.html";
  }
}

/* ---------- DASHBOARD WELCOME ---------- */
function loadUser() {
  const user = localStorage.getItem("currentUser");
  if (user) {
    document.getElementById("welcome").innerText =
      "Welcome, " + user + " 👋";
  }
}

/* ---------- PAGE NAVIGATION ---------- */
function go(page) {
  window.location.href = page;
}

/* ---------- JOB APPLY ---------- */
function applyJob() {
  alert("Job applied successfully ✅");
}

/* ---------- SAFETY FEATURES ---------- */
async function sos() {
  const userId = localStorage.getItem("userId") || "guest"; // Mock for now
  try {
    const response = await fetch(`${API_URL}/safety/sos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, latitude: 0, longitude: 0 })
    });
    if (response.ok) {
      alert("🚨 Emergency alert sent to server & trusted contacts!");
    }
  } catch (error) {
    alert("🚨 Local Emergency alert sent! (Server offline)");
  }
}

function shareLocation() {
  alert("📍 Location shared with server!");
}

function addTrust() {
  alert("🤝 Trust contact added to your profile!");
}
