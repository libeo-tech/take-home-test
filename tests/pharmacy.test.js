import {Pharmacy} from "../app/pharmacy/pharmacy";
import {Drug} from "../app/drugs/drug";

describe("Pharmacy", () => {
  describe("When the Pharmacy is created", () => {
    describe("And the drug array is empty", () => {
      it("should return and empty array", () => {
        const pharmacy = new Pharmacy([]);

        expect(pharmacy).toEqual({drugs: []});
      });
    });

    describe("And the drug array has invalid data", () => {
      describe("For the drug name", () => {
        it("should throw error", () => {
          try {
            new Pharmacy([["Doliprane", 20, 30], ["Doli", 21, 30]]);
          } catch (error) {
            expect(error).toBeInstanceOf(TypeError);
            expect(error).toHaveProperty('message', 'The Pharmacy does not have this drug available.');
          }
        });
      });

      describe("For the drug expire date", () => {
        it("should throw error", () => {
          try {
            new Pharmacy([["Doliprane", 'max', 30]]);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
          }
        });
      });

      describe('For the drug benefit value', () => {
        it("should throw and error", () => {
          try {
            const pharmacy = new Pharmacy([["Doliprane", 20, 'max']]);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
          }
        });
      });
    });

    describe("And the drug array has valid data", () => {
      it("should a pharmacy with all drugs", () => {
        const pharmacy = new Pharmacy([
          new Drug("Doliprane", 20, 30),
          new Drug("Herbal Tea", 10, 5),
          new Drug("Fervex", 5, 40),
          new Drug("Magic Pill", 15, 40)
        ]);

        expect(pharmacy.drugs[0]).toBeInstanceOf(Drug)
        expect(pharmacy.drugs[1]).toBeInstanceOf(Drug)
        expect(pharmacy.drugs[2]).toBeInstanceOf(Drug)
        expect(pharmacy.drugs[3]).toBeInstanceOf(Drug)
        expect(pharmacy).toEqual({
          drugs: [
            {name: 'Doliprane', expiresIn: 20, benefit: 30},
            {name: 'Herbal Tea', expiresIn: 10, benefit: 5},
            {name: 'Fervex', expiresIn: 5, benefit: 40},
            {name: 'Magic Pill', expiresIn: 15, benefit: 40}
          ]
        });
      })
      ;
    });
  });

  describe("When updateBenefitValue is called", () => {
    describe("And the Drugs array is empty", () => {
      it("should return and empty array", () => {
        const pharmacy = new Pharmacy([]);
        const updatedDrugValues = pharmacy.updateBenefitValue();

        expect(updatedDrugValues).toEqual([]);
      });
    });

    describe("And the Drugs array is not empty", () => {
      it("should return the updated Drug values", () => {
        const pharmacy = new Pharmacy([
          new Drug("Doliprane", 20, 30),
          new Drug("Herbal Tea", 10, 5),
          new Drug("Fervex", 5, 40),
          new Drug("Magic Pill", 15, 40)
        ]);
        const updatedDrugValues = pharmacy.updateBenefitValue();

        expect(updatedDrugValues[0]).toBeInstanceOf(Drug)
        expect(updatedDrugValues[1]).toBeInstanceOf(Drug)
        expect(updatedDrugValues[2]).toBeInstanceOf(Drug)
        expect(updatedDrugValues[3]).toBeInstanceOf(Drug)
        expect(updatedDrugValues).toMatchObject([
          {name: 'Doliprane', expiresIn: 19, benefit: 29},
          {name: 'Herbal Tea', expiresIn: 9, benefit: 6},
          {name: 'Fervex', expiresIn: 4, benefit: 43},
          {name: 'Magic Pill', expiresIn: 15, benefit: 40}
        ]);
      });
    });
  });

  it("should decrease the benefit and expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", 1, 2)]
    );
  });

  it("should decrease the benefit by 2 and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Doliprane", -1, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -2, 2)]
    );
  });

  it("should not change the benefit and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Doliprane", -5, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Doliprane", -6, 0)]
    );
  });

  it("should increase the benefit by 1 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 11)]
    );
  });

  it("should increase the benefit by 2 and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 7)]
    );
  });

  it("should increase the benefit (max) and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -12, 48)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -13, 50)]
    );
  });

  it("should increase the benefit (max) and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -21, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -22, 50)]
    );
  });

  it("should not change the benefit and decrease expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 50)]
    );
  });

  it("should not change the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 10, 3)]
    );
  });

  it("should not change the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", -2, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", -2, 8)]
    );
  });

  it("should decrease the benefit to min and reduce expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should not change the benefit and reduce expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 50)]
    );
  });

  it("should increase the benefit by 1 and reduce expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Fervex", 30, 30)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 29, 31)]
    );
  });

  it("should increase the benefit by 2 and reduce expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Fervex", 8, 23)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 7, 25)]
    );
  });

  it("should increase the benefit by 3 and reduce expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 19)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 22)]
    );
  });

  it("should decrease the benefit by 2 and expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 1)]
    );
  });

  it("should decrease the benefit by 4 and expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 0)]
    );
  });

  it("should decrease the benefit to min and expiresIn by 1 each", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -3, 0)]
    );
  });
});
