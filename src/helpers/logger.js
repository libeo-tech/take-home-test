"use strict";

import fs from "fs";

class LoggerError extends Error {
  constructor(error) {
    super();
    this.message = error;
  }
}

export class Logger {
  _log;

  pushLog(log) {
    this._log = log;
  }

  writeLog() {
    try {
      fs.writeFile("output.txt", this._log.toString(), err => {
        if (err) {
          console.log("error");
        } else {
          console.log("success");
        }
      });
    } catch (e) {
      return new LoggerError(e);
    }
  }
}
