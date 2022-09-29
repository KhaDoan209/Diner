//Open Navbar
document.getElementById("navbar__toggle").onclick = function () {
  document.getElementById("overlayNavbar").classList.toggle("navOpen");
};

// Close Navbar

document.getElementById("navbar__close").onclick = function () {
  document.getElementById("overlayNavbar").classList.remove("navOpen");
};

//Light Mode

document.getElementById("changeMode").onclick = function () {
  document.getElementById("pageBody").classList.toggle("darkMode");
};

