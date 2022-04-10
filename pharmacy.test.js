import {  Pharmacy } from "./pharmacy.js";
import {Drug} from "./drug.js"

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease or increase the benefit depending on the name and expiresIn",()=>{
    expect(new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("Herbal Tea",0,10),
      new Drug("Fervex",4,10),
      new Drug("Dafalgon",3,10),
      new Drug("Magic Pill",3,10)
    
    ]).updateBenefitValue()).toEqual([
      new Drug("test", 1, 2),
      new Drug("Herbal Tea",-1,12),
      new Drug("Fervex",3,13),
      new Drug("Dafalgon",2,8),
      new Drug("Magic Pill",3,10)
    ]);
  })
});
