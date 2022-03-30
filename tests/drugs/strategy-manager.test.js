import {StrategyManager} from "../../app/drugs/strategy-manager";

describe("StrategyManager", () => {
  describe('When try to instantiate new Drug', () => {
    it("should return a StrategyManager", () => {
      const strategyManager = new StrategyManager();
      expect(strategyManager).toMatchObject({
        _strategies: []
      })
    });
  });

  describe('When addStrategy is called', () => {
    describe('And no strategy is provided', () => {
      it("should return", () => {
        const strategyManager = new StrategyManager();
        strategyManager.addStrategy();
        expect(strategyManager).toMatchObject({
          _strategies: []
        })
      });
    });

    describe('And a strategy is provided', () => {
      it("should add new strategy to array", () => {
        const strategyManager = new StrategyManager();
        strategyManager.addStrategy('test');
        expect(strategyManager).toMatchObject({
          _strategies: ['test']
        })
      });
    });

    describe('And a strategy is provided', () => {
      it("should add new strategy to array", () => {
        const strategyManager = new StrategyManager();
        strategyManager.addStrategy('test');
        strategyManager.addStrategy('strategy');
        expect(strategyManager).toMatchObject({
          _strategies: ['test', 'strategy']
        })
      });
    });
  });

  describe('When getStrategy is called', () => {
    let strategyManager;
    beforeAll(() => {
      strategyManager = new StrategyManager();
    })

    describe('And no strategies are stored', () => {
      it("should return undefined", () => {
        const strategy = strategyManager.getStrategy();
        expect(strategy).toEqual(undefined);
      });
    });

    describe('And one strategy is stored but the name doesn\'t match', () => {
      it("should add new strategy to array", () => {
        strategyManager.addStrategy({name: 'test'});
        const strategy = strategyManager.getStrategy('strategy');
        expect(strategy).toEqual(undefined)
      });
    });

    describe('And one strategy is stored but the name doesn\'t match', () => {
      it("should add new strategy to array", () => {
        const strategy = strategyManager.getStrategy('test');
        expect(strategy).toEqual({name: 'test'});
      });
    });

    describe('And no strategies are stored', () => {
      it("should add new strategy to array", () => {
        strategyManager.addStrategy({name: 'strategy'});
        const strategy = strategyManager.getStrategy('strategy');
        strategyManager.getStrategy('strategy');
        expect(strategy).toEqual({name: 'strategy'});
      });
    });
  });
});
