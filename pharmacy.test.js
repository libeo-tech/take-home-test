import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";

describe("Pharmacy", () => {
  describe("updateBenefitValue", () => {
    it("should decrease/increase benefit and expiresIn of each drug in the Pharmacy", () => {
      expect(new Pharmacy([new Drug("test", 2, 3), new Drug("Fervex", 7, 10)]).updateBenefitValue()).toEqual(
        [new Drug("test", 1, 2), new Drug("Fervex", 6, 12)]
      );
    });
  });
});
