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
