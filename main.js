import "./style.scss";
import "animate.css";
const navbarBtn = document.getElementById("navbar-btn");
const navbarLinks = document.getElementById("navbar-links");
navbarBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
