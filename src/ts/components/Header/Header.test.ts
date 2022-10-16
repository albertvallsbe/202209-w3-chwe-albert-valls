import Header from "./Header.js";

describe("Given a Header element", () => {
  describe("When Header it's rendered", () => {
    test("Then it should show the Header element", () => {
      const screen = document.createElement("div");
      const className = ".main-header";

      const mainHeader = new Header(screen, "main-header", "header");
      mainHeader.render();
      const header = screen.querySelector(className);

      expect(header).not.toBeNull();
    });
  });
});
