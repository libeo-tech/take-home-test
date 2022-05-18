import { Drug } from "./drugs";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const updatedDrug = new Drug("test", 1, 2);
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [
        {
          name: updatedDrug.name,
          expiresIn: updatedDrug.expiresIn,
          benefit: updatedDrug.benefit
        }
      ]
    );
  });
});
