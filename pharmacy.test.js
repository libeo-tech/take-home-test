import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Regular Drug", () => {
    describe("When regular drug is not expired and benefit not null", () => {
      it("should decrease the benefit and expiresIn by one", () => {
        expect(
          new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Doliprane", 1, 2)]);
      });
    });

    describe("When regular drug has benefit to 0", () => {
      it("should decrease expiresIn by one and not benefit", () => {
        expect(
          new Pharmacy([new Drug("Doliprane", 2, 0)]).updateBenefitValue()
        ).toEqual([new Drug("Doliprane", 1, 0)]);
      });
    });

    describe("When regular drug is expired", () => {
      it("Should decrease expiresIn by one and benefit by two", () => {
        expect(
          new Pharmacy([new Drug("Doliprane", -2, 30)]).updateBenefitValue()
        ).toEqual([new Drug("Doliprane", -3, 28)]);
      });
    });
  });

  describe("Magic Pill", () => {
    describe("When Magic Pill has valid values", () => {
      it("Should not decrease the benefit nor expiresIn", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 2, 3)]);
      });
    });
    describe("When Magic Pill has benefit > 50", () => {
      it("Should not decrease expiresIn ans put the benefiit to 50", () => {
        expect(
          new Pharmacy([new Drug("Magic Pill", 2, 60)]).updateBenefitValue()
        ).toEqual([new Drug("Magic Pill", 2, 50)]);
      });
    });
  });

  describe("Dafalgan", () => {
    describe("When Dafalgan is not expired", () => {
      it("Should decrease the benefit by 2 and decrease expiresIn by one", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", 1, 1)]);
      });
    });

    describe("When the Dafalgan is expired", () => {
      it("Should decrease the benefit by 4 and decrease expiresIn by one", () => {
        expect(
          new Pharmacy([new Drug("Dafalgan", -2, 5)]).updateBenefitValue()
        ).toEqual([new Drug("Dafalgan", -3, 1)]);
      });
    });
  });

  describe("Herbal Tea", () => {
    describe("When Herbal Tea is not expired", () => {
      it("should decrease expiresIn and increase benefit", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", 1, 4)]);
      });
    });

    describe("When Herbal Tea is expired", () => {
      it("Should decrease expiresIn and increase benefit by 2)", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -2, 5)]);
      });
    });
    describe("When Herbal Tea is expired and benfit is at max (50)", () => {
      it("Should decrease expiresIn and maintain benefit", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -2, 50)]);
      });
    });
    describe("When Herbal Tea is expired and benfit is at 49", () => {
      it("Should decrease expiresIn and increase benefit to 1 (to max)", () => {
        expect(
          new Pharmacy([new Drug("Herbal Tea", -1, 49)]).updateBenefitValue()
        ).toEqual([new Drug("Herbal Tea", -2, 50)]);
      });
    });
  });

  describe("Fervex", () => {
    describe("When Fervex is not expired", () => {
      it("Should decrease expiresIn and increase benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 19, 4)]);
      });
    });

    describe("When Fervex is below 10 days expiresIn", () => {
      it("Should decrease expiresIn by one and increase benefit by 2", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 5)]);
      });
    });

    describe("When Fervex is below 5 days expiresIn", () => {
      it("Should decrease expiresIn by one and increase benefit by 3", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 6)]);
      });
    });

    describe("When Fervex is below 0 days expiresIn", () => {
      it("Should decrease expiresIn by one and set benefit to 0", () => {
        expect(
          new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", -2, 0)]);
      });
    });
    describe("When Fervex is below 0 days expiresIn and benefit at max (50)", () => {
      it("Should decrease expiresIn and maintain benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 20, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 19, 50)]);
      });
    });
    describe("When Fervex is below 10 days expiresIn and benefit at max (50) ", () => {
      it("Should decrease expiresIn and maintain benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 50)]);
      });
    });
    describe("When Fervex is below 5 days expiresIn and benefit at max (50)", () => {
      it("Should decrease expiresIn and maintain benefit", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 50)]);
      });
    });
    describe("When Fervex is below 10 days expiresIn and benefit is 49", () => {
      it("should decrease expiresIn and increase benefit by 1 (to max)", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 10, 49)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 9, 50)]);
      });
    });
    describe("When Fervex is below 5 days expiresIn and benefit is 58", () => {
      it("should decrease expiresIn and increase benefit by 2 (to max)", () => {
        expect(
          new Pharmacy([new Drug("Fervex", 5, 48)]).updateBenefitValue()
        ).toEqual([new Drug("Fervex", 4, 50)]);
      });
    });
  });
});
