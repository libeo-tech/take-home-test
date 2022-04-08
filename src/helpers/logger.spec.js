"use strict";

import { Logger } from "./logger";

describe("Logger helper", () => {
  let service;

  const mockLog = [{
    name: "Doliprane",
    expiresIn: 20,
    benefit: 30
  }];

  beforeEach(() => {
    service = new Logger();
    service._log = []
  });

  describe("#pushLog", () => {
    it("should push a log", () => {
      service.pushLog(mockLog);
      expect(service._log).toEqual(mockLog);
    });
  });

  describe("#writeLog", () => {
    beforeEach(() => {
      service._log = mockLog;
    });
    it("Job is fulfilled", () => {
      expect(service.writeLog).toBeTruthy();
    });
  });

});