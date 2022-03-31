export default class Navbar {
  constructor() {}
  navbarOn() {
    const navbarBtn = document.getElementById("navbar-btn");
    const navbarLinks = document.getElementById("navbar-links");
    navbarBtn.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }
}
