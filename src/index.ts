import fs from "fs";
import HerbalTea from "./drugs/HerbalTea";
import MagicPill from "./drugs/MagicPill";
import Fervex from "./drugs/Fervex";
import Dafalgan from "./drugs/Dafalgan";

const dafalgan = new Dafalgan(3, 15);
const herbalTea = new HerbalTea(10, 5);
const fervex = new Fervex(5, 40);
const magicPill = new MagicPill(15, 40);

export function simulateDays(days: number) {
  const result = [];

  for (let i = 0; i < days; i++) {
    herbalTea.updateBenefit();
    magicPill.updateBenefit();
    fervex.updateBenefit();
    dafalgan.updateBenefit();

    result.push({
      day: i + 1,
      "Herbal Tea": {
        expiresIn: herbalTea.expiresIn,
        benefit: herbalTea.benefit,
      },
      Fervex: { expiresIn: fervex.expiresIn, benefit: fervex.benefit },
      "Magic Pill": {
        expiresIn: magicPill.expiresIn,
        benefit: magicPill.benefit,
      },
      Dafalgan: { expiresIn: dafalgan.expiresIn, benefit: dafalgan.benefit },
    });
  }

  return result;
}

const simulationResult = simulateDays(30);

fs.writeFileSync("output.txt", JSON.stringify(simulationResult, null, 2));
