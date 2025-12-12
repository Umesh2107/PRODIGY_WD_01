window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#333";
  } else {
    navbar.style.background = "transparent";
  }
});