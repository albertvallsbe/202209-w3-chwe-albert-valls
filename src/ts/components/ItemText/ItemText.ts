import Component from "../Component/Component.js";

class ItemText extends Component {
  constructor(
    parentElement: HTMLElement,
    className: string,
    tag: string,
    public text: string
  ) {
    super(parentElement, className, tag);
  }

  render() {
    super.render();
    this.domElement.textContent = this.text;
  }
}

export default ItemText;
