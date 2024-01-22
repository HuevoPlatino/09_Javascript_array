import { getLongWords } from "./getLongWords.js";

describe("Given getLongWords function", () => {
  describe("When it receives an array of strings", () => {
    test("Then it should return an array with strings with length equal or greater then 5", () => {
      const words = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
      const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

      const result = getLongWords(words);

      expect(result).toEqual(EXPECTED_RESULT);
    });
    test("Then it should return an array with strings with length equal or greater then 5", () => {
      const words = ["John", "George", "Paul", "Ringo"];
      const EXPECTED_RESULT = ["George", "Ringo"];

      const result = getLongWords(words);

      expect(result).toEqual(EXPECTED_RESULT);
    });
  });
});
