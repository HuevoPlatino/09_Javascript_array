import { transformSecondsToWords } from "./transformSecondsToWords.js";

describe("Given transformSecondsToWords function", () => {
  describe("When it receives an array of numbers", () => {
    test("Then it should return an array of strings from numbers", () => {
      const SECONDS = [2, 5, 100];
      const EXPECTED_RESULT = ["2", "5", "100"];

      const result = transformSecondsToWords(SECONDS);

      expect(result).toEqual(EXPECTED_RESULT);
    });
  });
});
