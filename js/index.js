//Open Navbar
document.getElementById("navbar__toggle").onclick = function () {
  document.getElementById("overlayNavbar").classList.toggle("navOpen");
};

// Close Navbar

document.getElementById("navbar__close").onclick = function () {
  document.getElementById("overlayNavbar").classList.remove("navOpen");
};
