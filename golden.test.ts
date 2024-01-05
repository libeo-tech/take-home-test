import "regenerator-runtime/runtime";
import { readFile } from "fs/promises";

describe("Golden master", () => {
  it("should expect same app output", async () => {
    const truth = (await readFile("./output_truth.txt")).toString();
    const reality = (await readFile("./output.txt")).toString();

    expect(reality).toEqual(truth);
  });
});
