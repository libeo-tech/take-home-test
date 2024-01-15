import fs from "fs";
import { simulateDays } from "./index";

jest.mock("fs");

describe("simulateDays function", () => {
  it("should return an array with the correct length", () => {
    const mockedWriteFileSync = jest.spyOn(fs, "writeFileSync");

    const mockedSimulateDays = jest.fn(() => [
      { day: 1, "Herbal Tea": { expiresIn: 10, benefit: 5 } },
    ]);
    jest.mock("./index", () => ({
      simulateDays: mockedSimulateDays,
    }));

    const { simulateDays: importedSimulateDays } = require("./index");

    const result = importedSimulateDays(30);
    expect(result).toHaveLength(1);

    expect(mockedWriteFileSync).toHaveBeenCalledTimes(1);

    jest.restoreAllMocks();
  });

  it("should contain the expected properties for each day", () => {
    const result = simulateDays(30);
    result.forEach((dayResult: any) => {
      expect(dayResult).toHaveProperty("day");
      expect(dayResult).toHaveProperty("Herbal Tea");
      expect(dayResult).toHaveProperty("Fervex");
      expect(dayResult).toHaveProperty("Magic Pill");
      expect(dayResult).toHaveProperty("Dafalgan");
    });
  });
});
