import {Pharmacy} from "../app/pharmacy/pharmacy";
import {Doliprane} from "../app/drugs/doliprane";
import {HerbalTea} from "../app/drugs/herbal-tea";
import {Fervex} from "../app/drugs/fervex";
import {MagicPill} from "../app/drugs/magic-pill";

describe("Pharmacy", () => {
  describe.skip("When the Pharmacy is created", () => {
    describe("And the drug array is empty", () => {
      it("should return and empty array", () => {
        const pharmacy = new Pharmacy([]);
        console.log('PH', pharmacy)

        expect(pharmacy).toEqual({drugs: []});
      });
    });

    describe("And the drug array has invalid data", () => {
      describe("For the drug name", () => {
        it("should throw error", () => {
          try {
            const pharmacy = new Pharmacy([["Doliprane", 20, 30], ["Doli", 21, 30]]);
            console.log('pharmacy', pharmacy)
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
            console.log('errorerror', error)
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
          ["Doliprane", 20, 30],
          ["Herbal Tea", 10, 5],
          ["Fervex", 5, 40],
          ["Magic Pill", 15, 40]
        ]);
        console.log('PH', pharmacy)

        expect(pharmacy.drugs[0]).toBeInstanceOf(Doliprane)
        expect(pharmacy.drugs[1]).toBeInstanceOf(HerbalTea)
        expect(pharmacy.drugs[2]).toBeInstanceOf(Fervex)
        expect(pharmacy.drugs[3]).toBeInstanceOf(MagicPill)
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

  describe("When updateDrugValues is called", () => {
    describe("And the Drugs array is empty", () => {
      it("should return and empty array", () => {
        const pharmacy = new Pharmacy([]);
        const updatedDrugValues = pharmacy.updateDrugValues();
        console.log('updatedDrugValues',updatedDrugValues)
        expect(updatedDrugValues).toEqual([]);
      });
    });

    describe("And the Drugs array is not empty", () => {
      it("should return the updated Drug values", () => {
        const pharmacy = new Pharmacy([
          ["Doliprane", 20, 30],
          ["Herbal Tea", 10, 5],
          ["Fervex", 5, 40],
          ["Magic Pill", 15, 40]
        ]);
        const updatedDrugValues = pharmacy.updateDrugValues();

        expect(updatedDrugValues[0]).toBeInstanceOf(Doliprane)
        expect(updatedDrugValues[1]).toBeInstanceOf(HerbalTea)
        expect(updatedDrugValues[2]).toBeInstanceOf(Fervex)
        expect(updatedDrugValues[3]).toBeInstanceOf(MagicPill)
        expect(updatedDrugValues).toEqual([
          {name: 'Doliprane', expiresIn: 19, benefit: 29},
          {name: 'Herbal Tea', expiresIn: 9, benefit: 6},
          {name: 'Fervex', expiresIn: 4, benefit: 43},
          {name: 'Magic Pill', expiresIn: 15, benefit: 40}
        ]);
      });
    });
  });
});
