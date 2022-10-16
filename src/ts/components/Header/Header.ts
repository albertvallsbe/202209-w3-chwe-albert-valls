import Component from "../Component/Component.js";

class Header extends Component {
  constructor(parentElement: HTMLElement, className: string, tag: string) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<h1>Pokémon</h1>`;
  }
}

export default Header;
