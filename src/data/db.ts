import { Drug } from "../models/drug";

export const getDrugs = (): Drug[] => {
  return [
    new Drug("Doliprane", 20, 30),
    new Drug("Herbal Tea", 10, 5),
    new Drug("Fervex", 5, 40),
    new Drug("Magic Pill", 15, 40)
  ];
};
