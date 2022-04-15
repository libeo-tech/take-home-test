import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  // General rules
  it("benefit can't go under 0", () => {
    expect(new Pharmacy([new Drug("test", -1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 0)]
    );
  });

  it("benefit can't go above 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 10, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 9, 50)]
    );
  });


  // General drugs
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("benefit degrades twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug("test", -1, 38)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 36)]
    );
  });


  // Herbal Tea
  it("Herbal Tea benefit increases instead of decreasing", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 4, 27)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 3, 28)]
    );
  });

  it("Herbal Tea benefit increases twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 14)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 16)]
    );
  });


  // Magic Pill
  it("Magic Pill benefit and expiresIn never change", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 8, 22)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 8, 22)]
    );
  });


  // Fervex
  it("Fervex increases in benefit instead of decreasing", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 17)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 18)]
    );
  });

  it("Fervex increases by 2 when 5 < expiresIn < 10", () => {
    expect(new Pharmacy([new Drug("Fervex", 8, 17)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 7, 19)]
    );
  });

  it("Fervex increases by 3 when 0 <= expiresIn < 6", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 17)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 20)]
    );
  });

  it("Fervex benefit goes to 0 if expiration date has passed", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 17)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });


  // Dafalgan
  it("Dafalgan degrades in benefit twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 20, 45)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 19, 43)]
    );
  });


  // Multiple Drugs at once
  it("multiple drugs all update correctly", () => {
    const inputDrugs = [
      new Drug("Doliprane", 20, 41),
      new Drug("Herbal Tea", -2, 9),
      new Drug("Fervex", 3, 28),
      new Drug("Magic Pill", 12, 25),
      new Drug("Dafalgan", 20, 39)
    ];

    const outputDrugs = [
      new Drug("Doliprane", 19, 40),
      new Drug("Herbal Tea", -3, 11),
      new Drug("Fervex", 2, 31),
      new Drug("Magic Pill", 12, 25),
      new Drug("Dafalgan", 19, 37)
    ];

    expect(new Pharmacy(inputDrugs).updateBenefitValue()).toEqual(
      outputDrugs
    );
  });
});


