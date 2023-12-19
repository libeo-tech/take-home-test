import { spawnSync } from "child_process";
import { readFileSync } from "fs";

test("Final output should be the same", () => {
  spawnSync("node", ["index.js"]);

  const expected = readFileSync("./output-expected.txt", "utf-8");
  const received = readFileSync("./output-received.txt", "utf-8");

  expect(received).toEqual(expected);
});
