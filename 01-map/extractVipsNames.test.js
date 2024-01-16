import { extractVipsNames } from "./extractVipsNames.js";

describe("Given extractVipsNames function", () => {
  describe("When it receives an array of objects", () => {
    test("Then it should return an array of strings only with vips names", () => {
      const VIPS = [
        {
          name: "Foo",
          age: 80,
        },
        {
          name: "Bar",
          age: 2,
        },
        {
          name: "Fizz",
          age: 5,
        },
        {
          name: "Buzz",
          age: 16,
        },
        {
          name: "FizzBuzz",
          age: 100,
        },
      ];
      const EXPECTED_RESULT = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

      const result = extractVipsNames(VIPS);

      expect(result).toEqual(EXPECTED_RESULT);
    });
  });
});
