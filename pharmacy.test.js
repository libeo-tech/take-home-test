import { Drug, Pharmacy } from "./pharmacy";

function test(drugBeforeUpdate, drugAfterUpdate) {
  return expect(new Pharmacy([drugBeforeUpdate]).updateBenefitValue()).toEqual([drugAfterUpdate]);
}

describe("Pharmacy", () => {
  it("Normal Drugs: benefit should be reduced by one before expiration date, reduced by two after", () => {
    test(new Drug("Normal", 2, 3), new Drug("Normal", 1, 2));
    test(new Drug("Normal", 2, 0), new Drug("Normal", 1, 0));
    test(new Drug("Normal", 0, 3), new Drug("Normal", -1, 1));
    test(new Drug("Normal", -1, 5), new Drug("Normal", -2, 3));
    test(new Drug("Normal", -2, 1), new Drug("Normal", -3, 0));
  });

  it("Magic Pills: should only decrease expiresIn by 1", () => {
    test(new Drug("Magic Pill", 4, 5), new Drug("Magic Pill", 4, 5));
    test(new Drug("Magic Pill", -3, 7), new Drug("Magic Pill", -3, 7));
  });

  it("Herbal Tea: should double benefit after expiration date, increment by 1 before", () => {
    test(new Drug("Herbal Tea", 14, 5), new Drug("Herbal Tea", 13, 6));
    test(new Drug("Herbal Tea", 14, 50), new Drug("Herbal Tea", 13, 50));
    test(new Drug("Herbal Tea", -13, 5), new Drug("Herbal Tea", -14, 7));
    test(new Drug("Herbal Tea", -3, 49), new Drug("Herbal Tea", -4, 50));
  });

  it("Fervex: benefit should be reset when expired, incremented by 2 before 10 days, by 3 before 5 days", () => {
    test(new Drug("Fervex", -3, 52), new Drug("Fervex", -4, 0));
    test(new Drug("Fervex", 4, 5), new Drug("Fervex", 3, 8));
    test(new Drug("Fervex", 10, 23), new Drug("Fervex", 9, 25));
    test(new Drug("Fervex", 9, 49), new Drug("Fervex", 8, 50));
  });

  it("Dafalgan: benefit should be reduced twice as fat as for normal drugs", () => {
    test(new Drug("Dafalgan", 2, 6), new Drug("Dafalgan", 1, 4));
    test(new Drug("Dafalgan", 2, 0), new Drug("Dafalgan", 1, 0));
    test(new Drug("Dafalgan", 0, 3), new Drug("Dafalgan", -1, 0));
    test(new Drug("Dafalgan", -1, 5), new Drug("Dafalgan", -2, 1));
    test(new Drug("Dafalgan", -2, 3), new Drug("Dafalgan", -3, 0));
  });
});
