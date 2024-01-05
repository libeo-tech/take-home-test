import { Pharmacy } from "./pharmacy";
import { Drug } from "../entities/drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("test", 2, 3)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("test", 1, 2)]);
  });

  it("should decrease benefit twice when date expired", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Test", -1, 10)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Test", -1, 8)]);
  });

  it("should never have benefit negative", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Test", 3, 0)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Test", 2, 0)]);
  });

  it("should benefit increase twice after expiration date for Herbal Tea", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", -1, 10)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Herbal Tea", -1, 12)]);
  });

  it("should never have benefit more 50 for Herbal Tea", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", -1, 50)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });

  it("should never decrease in Benefit and never expires when drug is Magic Pill", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Magic Pill", 3, 23)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Magic Pill", 3, 23)]);
  });

  it("should increase benefit when drug is Fervex", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Fervex", 15, 35)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Fervex", 14, 36)]);
  });

  it("should increase benefit twice when drug is Fervex and date expired between 10 and 5 days left", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Fervex", 6, 20)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Fervex", 5, 22)]);
  });

  it("should increase benefit three times when drug is Fervex and date expired between 5 and 0 days left", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Fervex", 4, 20)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Fervex", 3, 23)]);
  });

  it("should decrease benefit twice when drug is Dafalgan", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 4, 6)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Dafalgan", 3, 4)]);
  });

  it("should increase benefit when drug is Herbal Tea", () => {
    // Arrange
    const pharmacy = new Pharmacy([new Drug("Herbal Tea", 45, 6)]);

    // Act
    const res = pharmacy.updateBenefitValue();

    // Assert
    expect(res).toEqual([new Drug("Herbal Tea", 44, 7)]);
  });

});
