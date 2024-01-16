import { capitalizeMates } from "./capitalizeMates.js";

describe("Given capitalizeMates function", () => {
  describe("When it receives an array of strings", () => {
    test("Then it should return an array of strings with capitalized names", () => {
      const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
      const EXPECTED_RESULT = ["John", "Jacob", "Jingleheimer", "Schmidt"];

      const result = capitalizeMates(MATES);

      expect(result).toEqual(EXPECTED_RESULT);
    });
  });
});
