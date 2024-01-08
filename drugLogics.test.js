import {
  isExpired,
  increaseBenefit,
  decreaseBenefit,
  magicPillLogic,
  herbalTeaLogic,
  fervexLogic,
  drugLogic,
  dafalganLogic,
  decreaseExpiresIn
} from "./drugLogics";

describe("Usual methods", () => {
  it("should return false", () => {
    expect(isExpired(1)).toEqual(false);
  });

  it("should return true", () => {
    expect(isExpired(-1)).toEqual(true);
  });

  it("should increase value by one", () => {
    expect(increaseBenefit(10, 1)).toEqual(11);
  });

  it("should not increase more than 50", () => {
    expect(increaseBenefit(10, 100)).toEqual(50);
  });

  it("should decrease value by 2", () => {
    expect(decreaseBenefit(10, 2)).toEqual(8);
  });

  it("should not decrease more than 0", () => {
    expect(decreaseBenefit(10, 100)).toEqual(0);
  });

  it("should decrease by one", () => {
    expect(decreaseExpiresIn(10, 1)).toEqual(9);
  });
});

describe("Logic methods - Magic Pill", () => {
  it("should not change benefit", () => {
    expect(magicPillLogic(10, 20)).toEqual([10, 20]);
  });
});

describe("Logic methods - Herbal Tea", () => {
  it("should increase benefit by one", () => {
    expect(herbalTeaLogic(10, 20)).toEqual([9, 21]);
  });

  it("should increase benefit by two ", () => {
    expect(herbalTeaLogic(-1, 20)).toEqual([-2, 22]);
  });

  it("should not increase benefit more than fifty ", () => {
    expect(herbalTeaLogic(-1, 49)).toEqual([-2, 50]);
  });
});

describe("Logic methods - Fervex Pill", () => {
  it("should decrease benefit by one", () => {
    expect(fervexLogic(15, 10)).toEqual([14, 9]);
  });

  it("should increase benefit by two", () => {
    expect(fervexLogic(10, 10)).toEqual([9, 12]);
  });

  it("should increase benefit by three", () => {
    expect(fervexLogic(5, 10)).toEqual([4, 13]);
  });

  it("should decrease benefit to zero", () => {
    expect(fervexLogic(0, 10)).toEqual([-1, 0]);
  });
});

describe("Logic methods - Drug", () => {
  it("should decrease benefit by one", () => {
    expect(drugLogic(5, 10)).toEqual([4, 9]);
  });

  it("should decrease benefit by two", () => {
    expect(drugLogic(0, 10)).toEqual([-1, 8]);
  });
});

describe("Logic methods - Dafalgan", () => {
  it("should decrease benefit by two", () => {
    expect(dafalganLogic(10, 10)).toEqual([9, 8]);
  });

  it("should decrease benefit by four", () => {
    expect(dafalganLogic(0, 10)).toEqual([-1, 6]);
  });
});
