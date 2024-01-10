import { Doliprane } from "./drugs/doliprane";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

  it('should be true', () => {
    expect(true).toBeTruthy();
  })

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Doliprane(2, 3)]).updateBenefitValue()).toEqual(
      [new Doliprane(1, 2)]
    );
  });
});
