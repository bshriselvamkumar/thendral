// SAVE USER
function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (!email || !pass) {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem(email, pass);
  alert("Account created!");
  window.location.href = "login.html";
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (localStorage.getItem(email) === pass) {
    localStorage.setItem("loggedInUser", email);
    alert("Login success!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// CHECK LOGIN
function checkAuth() {
  const user = localStorage.getItem("loggedInUser");
  if (!user) {
    window.location.href = "login.html";
  }
}
