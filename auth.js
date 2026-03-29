// Save user
function signup() {
  const user = document.getElementById("signupUser").value;
  const pass = document.getElementById("signupPass").value;

  if (!user || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem(user, pass);
  alert("Signup successful!");
  window.location.href = "login.html";
}

// Login user
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  const storedPass = localStorage.getItem(user);

  if (storedPass === pass) {
    localStorage.setItem("loggedInUser", user);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// Logout
function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}

// Show user in navbar
function checkLogin() {
  const user = localStorage.getItem("loggedInUser");

  if (user) {
    document.getElementById("authArea").innerHTML =
      `<span>Welcome, ${user}</span>
       <button onclick="logout()">Logout</button>`;
  }
}

window.onload = checkLogin;
