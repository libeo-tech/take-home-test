import { Drug, HerbalTea, MagicPill, Fervex, Dafalgan } from "./drugs";

describe("Drugs", () => {
  it("should decrease the benefit and expiresIn by one each", () => {
    expect(new Drug("test", 2, 3).updateDrugValues()).toEqual(
      new Drug("test", 1, 2)
    );
  });
  it("should decrease the benefit by 2 and decrease expiresIn by one", () => {
    expect(new Drug("test", 0, 3).updateDrugValues()).toEqual(
      new Drug("test", -1, 1)
    );
  });
  it("should decrease the benefit by 1 and decrease expiresIn by one", () => {
    expect(new Drug("test", 0, 1).updateDrugValues()).toEqual(
      new Drug("test", -1, 0)
    );
  });
  it("should only decrease the expiresIn by 1", () => {
    expect(new Drug("test", 1, 0).updateDrugValues()).toEqual(
      new Drug("test", 0, 0)
    );
  });
});

describe("HerbalTea", () => {
  it("should decrease the benefit and increase expiresIn by one each", () => {
    expect(new HerbalTea("test", 2, 3).updateDrugValues()).toEqual(
      new HerbalTea("test", 1, 4)
    );
  });
  it("should increase the benefit by 2  and decrease expiresIn by one", () => {
    expect(new HerbalTea("test", 0, 3).updateDrugValues()).toEqual(
      new HerbalTea("test", -1, 5)
    );
  });
  it("should increase the benefit by 1 and decrease expiresIn by one", () => {
    expect(new HerbalTea("test", 0, 49).updateDrugValues()).toEqual(
      new HerbalTea("test", -1, 50)
    );
  });
  it("should decrease the expiresIn by 1 and decrease expiresIn by one", () => {
    expect(new HerbalTea("test", 1, 50).updateDrugValues()).toEqual(
      new HerbalTea("test", 0, 50)
    );
  });
});

describe("MagicPill", () => {
  it("should let the benefit and expiresIn the same", () => {
    expect(new MagicPill("test", 2, 3).updateDrugValues()).toEqual(
      new MagicPill("test", 2, 3)
    );
  });
});

describe("Fervex", () => {
  it("should decrease the benefit and increase expiresIn by one each", () => {
    expect(new Fervex("test", 12, 3).updateDrugValues()).toEqual(
      new Fervex("test", 11, 4)
    );
  });
  it("should set the benefit to 0 and decrease expiresIn by one", () => {
    expect(new Fervex("test", 0, 3).updateDrugValues()).toEqual(
      new Fervex("test", -1, 0)
    );
  });
  it("should decrease expiresIn by 1 and increase the benefit by 2", () => {
    expect(new Fervex("test", 9, 48).updateDrugValues()).toEqual(
      new Fervex("test", 8, 50)
    );
  });
  it("should decrease expiresIn by 1 and increase the benefit by 1", () => {
    expect(new Fervex("test", 9, 49).updateDrugValues()).toEqual(
      new Fervex("test", 8, 50)
    );
  });
  it("should decrease expiresIn by 1 and increase the benefit by 3", () => {
    expect(new Fervex("test", 5, 30).updateDrugValues()).toEqual(
      new Fervex("test", 4, 33)
    );
  });
  it("should decrease expiresIn by 1 and increase the benefit by 2", () => {
    expect(new Fervex("test", 5, 48).updateDrugValues()).toEqual(
      new Fervex("test", 4, 50)
    );
  });
  it("should decrease expiresIn by 1 and increase the benefit by 1", () => {
    expect(new Fervex("test", 5, 49).updateDrugValues()).toEqual(
      new Fervex("test", 4, 50)
    );
  });
  it("should not change the value of the benifitand decrease expiresIn by one", () => {
    expect(new Fervex("test", 0, 0).updateDrugValues()).toEqual(
      new Fervex("test", -1, 0)
    );
  });
});

describe("Dafalgan", () => {
  it("should decrease the benefit by one and expiresIn by 2", () => {
    expect(new Dafalgan("test", 2, 3).updateDrugValues()).toEqual(
      new Dafalgan("test", 1, 1)
    );
  });
  it("should decrease the benefit by 4and decrease expiresIn by one", () => {
    expect(new Dafalgan("test", 0, 5).updateDrugValues()).toEqual(
      new Dafalgan("test", -1, 1)
    );
  });
  it("should decrease the benefit by 1", () => {
    expect(new Dafalgan("test", 0, 1).updateDrugValues()).toEqual(
      new Dafalgan("test", -1, 0)
    );
  });
  it("should decrease the benefit by 3 and decrease expiresIn by one", () => {
    expect(new Dafalgan("test", 0, 3).updateDrugValues()).toEqual(
      new Dafalgan("test", -1, 0)
    );
  });
  it("should decrease the benefit by 2 and decrease expiresIn by one", () => {
    expect(new Dafalgan("test", 0, 2).updateDrugValues()).toEqual(
      new Dafalgan("test", -1, 0)
    );
  });
  it("should decrease the expiresIn by 1", () => {
    expect(new Dafalgan("test", 1, 0).updateDrugValues()).toEqual(
      new Dafalgan("test", 0, 0)
    );
  });
});
