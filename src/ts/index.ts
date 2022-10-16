import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import ItemText from "./components/ItemText/ItemText.js";
import ApiList from "./components/ApiList/ApiList.js";

const root = document.querySelector(".root");

const header = new Header(root as HTMLElement);
header.render();

const headerTitle = document.querySelector(".main-header");
const headerMainTitle = new ItemText(
  headerTitle as HTMLElement,
  "main-header__title",
  "h1",
  "Pokémon"
);
headerMainTitle.render();

const headerIntro = document.querySelector(".main-header");
const headerMainIntro = new ItemText(
  headerIntro as HTMLElement,
  "span-title",
  "span",
  "Gotta Catch 'Em All"
);
headerMainIntro.render();

const main = new Main(root as HTMLElement);
main.render();

const mainTitle = document.querySelector(".main-body");
const mainBodyTitle = new ItemText(
  mainTitle as HTMLElement,
  "main-body__title",
  "h2",
  "Pokédex: "
);
mainBodyTitle.render();

const apiBody = document.querySelector(".main-body");
const apiListBody = new ApiList(apiBody as HTMLElement, 0);
apiListBody.render();
