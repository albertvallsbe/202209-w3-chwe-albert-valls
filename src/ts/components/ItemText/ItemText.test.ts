import ItemText from "./ItemText";

describe("Given a ItemText", () => {
  describe("When ItemText it's rendered", () => {
    test("Then it should the text as ItemText", () => {
      const screen = document.createElement("div");
      const title = "Pokédex";
      const titleExpected = "Pokédex";

      const mainTitle = new ItemText(screen, "main-header", "h1", title);
      mainTitle.render();

      const pokemonHeaderTitle = screen.querySelector("h1");

      expect(pokemonHeaderTitle?.textContent).toBe(titleExpected);
    });
  });
});
