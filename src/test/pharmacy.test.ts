import { Drug } from "../models/drug";
import { Pharmacy } from "../models/pharmacy";
import * as fs from "fs";
import { getDrugs } from "../data/db";

describe("Pharmacy", () => {
  describe("updateBenefitValue", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
  });

  describe("startSimulation", () => {
    it("should correspond to content of output-goal.txt", () => {
      const goal = fs.readFileSync("./src/test/output-goal.txt", {
        encoding: "utf-8",
        flag: "r"
      });

      expect(new Pharmacy(getDrugs()).startSimulation(30).toString()).toEqual(
        goal
      );
    });
  });
});
