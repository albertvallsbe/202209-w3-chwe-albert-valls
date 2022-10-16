import Main from "./Main.js";

describe("Given a Main element", () => {
  describe("When Main it's rendered", () => {
    test("Then it should show the Main element", () => {
      const screen = document.createElement("div");
      const className = ".main-body";

      const mainBody = new Main(screen);
      mainBody.render();
      const main = screen.querySelector(className);

      expect(main).not.toBeNull();
    });
  });
});
