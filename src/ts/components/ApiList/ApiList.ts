import Component from "../Component/Component.js";

class ApiList extends Component {
  constructor(parentElement: HTMLElement, public pageOfList: number) {
    super(parentElement, "api-list-container", "section");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <nav class="api-list__nav">
    <button class="button prev-page
    ">back</button>
    <span class="index-pages">${this.pageOfList}    / Total  </span>
    <button class="button next-page">next</button>
    </nav>`;
  }
}
export default ApiList;
