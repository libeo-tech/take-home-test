import { Drug } from "./drug";
import { Fervex } from "./fervex";
import { HerbalTea } from "./herbalTea";
import { MagicPill } from "./magicPill";
import { Dafalgan } from "./dafalgan";
import { Doliprane } from "./doliprane";

describe("Drug", () => {
    describe("MagicPill", () => {
        it("expiresIn and benefit never change", () => {
            const drug = new MagicPill(2, 3);
            drug.updateDrug();
            expect(drug.expiresIn).toEqual(2);
            expect(drug.benefit).toEqual(3);
        });
    });

    describe("Fervex", () => {
        it("should increase benefit 2 times when expiresIn is less or equal 10", () => {
            const drug = new Fervex(10, 3);
            drug.updateDrug();

            expect(drug.benefit).toEqual(5);
        })

        it("should increase benefit 3 times when expiresIn is less or equal 5", () => {
            const drug = new Fervex(5, 3);
            drug.updateDrug();

            expect(drug.benefit).toEqual(6);
        })

        it("should decrease benefit to 0 when expireIn is 0", () => {
            const drug = new Fervex(1, 3);
            drug.updateDrug();
            drug.updateDrug();

            expect(drug.benefit).toEqual(0);
        })
    });

    describe("HerbalTea", () => {
        it("should increase benefit and decrease expireIn", () => {
            const drug = new HerbalTea(10, 3);
            drug.updateDrug();

            expect(drug.benefit).toEqual(4);
            expect(drug.expiresIn).toEqual(9);
        })

        it("should increase benefit 2 times when expireIn is 0", () => {
            const drug = new HerbalTea(1, 3);
            
            drug.updateDrug();
            drug.updateDrug();

            expect(drug.benefit).toEqual(6);
            expect(drug.expiresIn).toEqual(0);
        })

        it('benefit can not increase until 50', () => {
            const drug = new HerbalTea(0, 50);
            drug.updateDrug();

            expect(drug.benefit).toEqual(50);
        });
    });

    describe("Doliprane", () => {
        it("should decrease decrease expiresIn and benefit", () => {
            const drug = new Doliprane(10, 3);
            drug.updateDrug();

            expect(drug.expiresIn).toEqual(9);
            expect(drug.benefit).toEqual(2);
        })
    });

    describe("Dafalgan", () => {
        it("should decrease 2 time faster benefit", () => {
            const drug = new Dafalgan(10, 3);
            drug.updateDrug();

            expect(drug.benefit).toEqual(1);
        })
    });

});