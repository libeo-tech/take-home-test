"use strict";

import { Manage } from "./manage";

describe("Logger helper", () => {
  let service;

  const mockDataItems = [
    {
      name: "Drug1",
      expiresIn: 5,
      benefit: 40
    },
    {
      name: "Drug2",
      expiresIn: 15,
      benefit: 40
    }
  ];

  beforeEach(() => {
    service = new Manage(mockDataItems);
  });

  describe("On class init", () => {
    it("should call #_buildinventory", () => {
      expect(service._pharmacy).toBeDefined();
      expect(service._pharmacy.drugs.length).toEqual(2);
      expect(service._pharmacy.drugs[0]).toEqual(mockDataItems[0]);
      expect(service._pharmacy.drugs[1]).toEqual(mockDataItems[1]);
    });
  });

  describe("#process", () => {
    describe("When catching problem", () => {
      it("should throw error", () => {
        jest.spyOn(service, "pushLog");
        jest.spyOn(service, "writeLog");
        service.process();
        expect(service.pushLog).toHaveBeenCalledTimes(30);
        expect(service.writeLog).toHaveBeenCalledTimes(1);
      });
    });
  });
});