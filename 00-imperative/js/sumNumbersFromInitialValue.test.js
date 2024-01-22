import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given sumNumbersFromInitialValue function", () => {
  describe("When it receives an array of numbers", () => {
    test("Then it should return its sum value depending on initial value", () => {
      const numbers = [1, 2, 3, 4, 5];
      const initial = 0;
      const EXPECTED_RESULT = 15;

      const result = sumNumbersFromInitialValue(initial);

      expect(result).toEqual(EXPECTED_RESULT);
    });
    test("Then it should return its sum value depending on initial value", () => {
      const numbers = [1, 2, 3, 4, 5];
      const initial = 10;
      const EXPECTED_RESULT = 25;

      const result = sumNumbersFromInitialValue(initial);

      expect(result).toEqual(EXPECTED_RESULT);
    });
  });
});
