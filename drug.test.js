import {Drug} from "./drug.js"


describe("Any Drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(new Drug("test", 5, 10).updateDrug()).toEqual(new Drug("test", 4, 9));
    });
    it("should not decrease the benefict under 0",()=>{
      expect(new Drug("test", 4, 0).updateDrug()).toEqual(new Drug("test", 3, 0));
    });
    it("should decrease the benefit twice as fast.",()=>{
        expect(new Drug("test", 0, 10).updateDrug()).toEqual(new Drug("test", -1, 8));
    })
});

describe("Herbal Tea",()=>{
    it("should increase the benefit and decrease expiresIn", () => {
        expect(new Drug("Herbal Tea", 5, 10).updateDrug()).toEqual(new Drug("Herbal Tea", 4, 11));
    });
    it("should not increase the benefit over 50", () => {
        expect(new Drug("Herbal Tea", 5, 50).updateDrug()).toEqual(new Drug("Herbal Tea", 4, 50));
      });
    it("should increase the benefit and do not depass 50 twice as fast and decrease expiresIn ",()=>{
        expect(new Drug("Herbal Tea", 0, 49).updateDrug()).toEqual(new Drug("Herbal Tea", -1, 50));
    })
})
