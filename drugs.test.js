import { Drug } from "./drugs.js"

describe("Drugs", () => {
  it("should decrease the benefit and expiresIn by one each", () => {
    expect(new Drug("test", 2, 3).updateBenefitValue()).toEqual(new Drug("test", 1, 2))
  })
  it("should only decrease the benefit by 2", () => {
    expect(new Drug("test", 0, 3).updateBenefitValue()).toEqual(new Drug("test", 0, 1))
  })
  it("should only decrease the benefit by 1", () => {
    expect(new Drug("test", 0, 1).updateBenefitValue()).toEqual(new Drug("test", 0, 0))
  })
  it("should only decrease the expiresIn by 1", () => {
    expect(new Drug("test", 1, 0).updateBenefitValue()).toEqual(new Drug("test", 0, 0))
  })
  it("should not change the values of the benifit and expiresIn", () => {
    expect(new Drug("test", 0, 0).updateBenefitValue()).toEqual(new Drug("test", 0, 0))
  })
})
