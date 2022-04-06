import { Dafalgan } from "./Dafalgan";
import { NormalDrug } from "./NormalDrug";
import { Fervex } from "./Fervex";
import { HerbalTea } from "./HerbalTea";
import { MagicPill } from "./MagicPill";
import { Pharmacy } from "./Pharmacy";

describe("Pharmacy update the benefit drugs", () => {

  test("after one day passed, should decrease the benefit and expiresIn", () => {
    const pharmacy = Pharmacy.Rehydrate([NormalDrug.New("test", 2, 3)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([NormalDrug.New("test", 1, 2)]);
  });

  test("When Drug expirated, should decrease the benefit twice as fast", () => {
    const pharmacy = Pharmacy.Rehydrate([NormalDrug.New("test", 0, 8)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([NormalDrug.New("test", -1, 6)]);
  });
  
  test("The benefit of drug can't be inferior of zero", () => {
    const pharmacy = Pharmacy.Rehydrate([NormalDrug.New("test", 0, 1)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 10);

    expect(pharmacy.drugs).toEqual([NormalDrug.New("test", -10, 0)]);
  });

  
  test("The benefit of herbal tea, should increase when day passed", () => {
    const pharmacy = Pharmacy.Rehydrate([HerbalTea.New(2, 1)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([HerbalTea.New(1, 2)]);
  });

  test("The benefit of herbal tea, should increase twice fast after expiration", () => {
    const pharmacy = Pharmacy.Rehydrate([HerbalTea.New(1, 1)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 2);

    expect(pharmacy.drugs).toEqual([HerbalTea.New(-1, 4)]);
  });

  test("The benefit of herbal tea cannot exceed 50", () => {
    const pharmacy = Pharmacy.Rehydrate([HerbalTea.New(20, 49)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 20);

    expect(pharmacy.drugs).toEqual([HerbalTea.New(0, 50)]);
  });

  test("All drugs can't be created with a benefit grater than 50", () => {
    const pharmacy = Pharmacy.Rehydrate([
      NormalDrug.New("test", 20, 400), 
      HerbalTea.New(20, 100)
    ]);
    
    expect(pharmacy.drugs).toEqual([
      NormalDrug.New("test", 20, 50),
      HerbalTea.New(20, 50)
    ]);
  });

  test("The benefit of magical pill should not be decrease when days passed", () => {
    const pharmacy = Pharmacy.Rehydrate([MagicPill.New(20, 20)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 10);

    expect(pharmacy.drugs).toEqual([MagicPill.New(10, 20)]);
  });

  test("The magical pill should not be expired", () => {
    const pharmacy = Pharmacy.Rehydrate([MagicPill.New(10, 20)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 20);

    expect(pharmacy.drugs).toEqual([MagicPill.New(0, 20)]);
  });

  
  test("Fervex benefit increase with a default rate when expiration has greater than 10 days", () => {
    const pharmacy = Pharmacy.Rehydrate([Fervex.New(20, 30)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([Fervex.New(19, 31)]);
  });

  test("Fervex benefit increase with a twice fast rate when expiration date is beetween 5 and 10 days", () => {
    const pharmacy = Pharmacy.Rehydrate([Fervex.New(11, 30)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([Fervex.New(10, 32)]);
  });

  test("Fervex benefit increase with a thrice fast rate when expiration date is beetween 3 and 1 days", () => {
    const pharmacy = Pharmacy.Rehydrate([Fervex.New(4, 30)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([Fervex.New(3, 33)]);
  });

  test("Fervex benefit is 0 when date has expired", () => {
    const pharmacy = Pharmacy.Rehydrate([Fervex.New(1, 5)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 1);

    expect(pharmacy.drugs).toEqual([Fervex.New(0, 0)]);
  });

  test("Dafalgan benefit decrease is twice fast than normal drug", () => {
    const pharmacy = Pharmacy.Rehydrate([Dafalgan.New(6, 10)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 2);

    expect(pharmacy.drugs).toEqual([Dafalgan.New(4, 6)]);
  });

  test("Dafalgan benefit decrease is twice fast than normal drug also when has expirated", () => {
    const pharmacy = Pharmacy.Rehydrate([Dafalgan.New(0, 10)]);
    
    updateBenefitDrugsOfPharmacyAfterNDays(pharmacy, 2);

    expect(pharmacy.drugs).toEqual([Dafalgan.New(-2, 2)]);
  });

  var updateBenefitDrugsOfPharmacyAfterNDays = function(pharmacy: Pharmacy, numberOfDays: number): void {
    
    for (var i = 0; i < numberOfDays; i++) {
      pharmacy.updateBenefitsOfDrugsAfterOneDay();
    }
  }
  
});
