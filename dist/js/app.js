import "../scss/style.scss";
import Navbar from "./navbar.js";
import Effects from "./effects.js";
const navbar = new Navbar();
const effects = new Effects();

class App {
  constructor(navbar, effects) {
    this.navbar = navbar;
    this.effects = effects;
  }

  boot() {
    this.navbar.boot();
    this.effects.boot();
  }
}

const app = new App(navbar, effects).boot();
