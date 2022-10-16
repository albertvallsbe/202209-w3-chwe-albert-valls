import Header from "./components/Header/Header.js";
import ItemText from "./components/ItemText/ItemText.js";

const root = document.querySelector(".root");

const header = new Header(root as HTMLElement);
header.render();

const mainTitle = document.querySelector(".main-header");
const headerTitle = new ItemText(
  mainTitle as HTMLElement,
  "main-title",
  "h1",
  "Pokédex"
);
headerTitle.render();

const introTitle = document.querySelector(".main-header");
const secondaryTitle = new ItemText(
  introTitle as HTMLElement,
  "span-title",
  "span",
  "Gotta Catch 'Em All"
);
secondaryTitle.render();
