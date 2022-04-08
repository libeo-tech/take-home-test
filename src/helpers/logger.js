"use strict";

import fs from "fs";

export class Logger {
  _log = [];

  pushLog(log) {
    this._log = log;
  }

  writeLog(log) {
    fs.writeFile("output.txt", this._log.toString(), err => {
      if (err) {
        console.log("error");
      } else {
        console.log("success");
      }
    });
  }
}
