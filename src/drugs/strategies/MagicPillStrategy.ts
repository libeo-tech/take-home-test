import DefaultStrategy from "./DefaultStrategy";
import Drug from "../Drug";

class MagicPillStrategy extends DefaultStrategy {
  update(drug: Drug): Drug {
    return drug;
  }
}

export default MagicPillStrategy;
