export default class Navbar {
  constructor() {}
  navbarOn() {
    this.navbarToggle();
    this.navbarScrolling();
  }
  navbarToggle() {
    const navbarBtn = document.getElementById("navbar-btn");
    const navbarLinks = document.getElementById("navbar-links");
    navbarBtn.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }
  navbarScrolling() {
    const navbar = document.getElementById("navbar");
    window.onscroll = function () {
      const screenSize = window.screen.height / 20;
      const item = document.querySelector("#navbar");
      if (item) {
        if (window.pageYOffset >= screenSize) {
          item.classList.add("scrolling");
        } else {
          item.classList.remove("scrolling");
        }
      }
    };
  }
}
