import Component from "./components/Component/Component.js";
import Header from "./components/Header/Header.js";

const root = document.querySelector(".root");

const header = new Header(root as HTMLElement);
header.render();

const header2 = new Component(root as HTMLElement, "main-header", "header");
header2.render();
