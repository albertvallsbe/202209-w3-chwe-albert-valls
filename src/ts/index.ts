import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";
import HeaderBox from "./components/HeaderBox/HeaderBox.js";
import ItemText from "./components/ItemText/ItemText.js";

const root = document.querySelector(".root");

const header = new Header(root as HTMLElement, "main-header", "header");
header.render();

const header2 = new Component(root as HTMLElement, "main-header2", "header");
header2.render();

const mainTitle = document.querySelector(".main-header2");
const headerTitle = new ItemText(
  mainTitle as HTMLElement,
  "main-title",
  "h1",
  "Pokédex"
);
headerTitle.render();

const headerBox = new HeaderBox(root as HTMLElement);
headerBox.render();
