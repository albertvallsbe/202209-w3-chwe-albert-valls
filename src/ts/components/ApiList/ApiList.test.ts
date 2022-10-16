import ApiList from "./ApiList.js";

describe("Given a ApiList component", () => {
  describe("When ApiList it's rendered", () => {
    test("Then it should show te element", () => {
      const screen = document.createElement("div");
      const className = ".api-list-container";
      const initialnumber = 0;

      const apiList = new ApiList(screen, initialnumber);
      apiList.render();
      const list = screen.querySelector(className);

      expect(list).not.toBeNull();
    });
  });
});
