import { Drug } from "./drug";

describe("Drug", () => {
    describe("updateBenefit", () => {
        it("should update Doliprane correctly ", () => {
            expect(new Drug("Doliprane", 2, 3).updateBenefit()).toEqual(new Drug("Doliprane", 1, 2));
            expect(new Drug("Doliprane", 0, 3).updateBenefit()).toEqual(new Drug("Doliprane", -1, 1));
        });
        it("should update Herbal Tea correctly ", () => {
            expect(new Drug("Herbal Tea", 2, 3).updateBenefit()).toEqual(new Drug("Herbal Tea", 1, 4));
            expect(new Drug("Herbal Tea", 0, 3).updateBenefit()).toEqual(new Drug("Herbal Tea", -1, 5));
        });
        it("should update Fervex correctly ", () => {
            expect(new Drug("Fervex", 11, 10).updateBenefit()).toEqual(new Drug("Fervex", 10, 11));
            expect(new Drug("Fervex", 7, 10).updateBenefit()).toEqual(new Drug("Fervex", 6, 12));
            expect(new Drug("Fervex", 3, 10).updateBenefit()).toEqual(new Drug("Fervex", 2, 13));
            expect(new Drug("Fervex", 0, 10).updateBenefit()).toEqual(new Drug("Fervex", -1, 0));
        });
        it("should update Dafalgan correctly ", () => {
            expect(new Drug("Fervex", 11, 10).updateBenefit()).toEqual(new Drug("Fervex", 10, 11));
            expect(new Drug("Fervex", 7, 10).updateBenefit()).toEqual(new Drug("Fervex", 6, 12));
            expect(new Drug("Fervex", 3, 10).updateBenefit()).toEqual(new Drug("Fervex", 2, 13));
            expect(new Drug("Fervex", 0, 10).updateBenefit()).toEqual(new Drug("Fervex", -1, 0));
        });
        it("shouldn't do anything with Magic Pill ", () => {
            expect(new Drug("Magic Pill", 11, 10).updateBenefit()).toEqual(new Drug("Magic Pill", 11, 10));
        });
        it("should update any other drug correctly ", () => {
            expect(new Drug("test", 2, 3).updateBenefit()).toEqual(new Drug("test", 1, 2));
            expect(new Drug("test", 0, 3).updateBenefit()).toEqual(new Drug("test", -1, 1));
        });
    });
});
