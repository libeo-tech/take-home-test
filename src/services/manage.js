"use strict";

import { Drug, Pharmacy } from "../../pharmacy";
import { Logger } from "../helpers/logger";

class ManageError extends Error {
  constructor(error) {
    super();
    this.message = error;
  }
}

export class Manage extends Logger {
  _pharmacy;

  constructor(items) {
    super();
    this._buildinventory(items)
  }

  _buildinventory(items) {
    const drugs = items.map(item => new Drug(item.name, item.expiresIn, item.benefit));
    this._pharmacy = new Pharmacy(drugs);
  }

  process() {
    const delay = process.env.ANALISYS_DAYS_INTERVAL || 30;
    try {
      for (let elapsedDays = 0; elapsedDays < delay; elapsedDays++) {
        const output = this._pharmacy.updateBenefitValue();
        this.pushLog(JSON.stringify(output));
      }
      this.writeLog();
    } catch (e) {
      return new ManageError(e);
    }
  }
}