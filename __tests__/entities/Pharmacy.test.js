import Pharmacy from '../../entities/Pharmacy';
import HerbalTeaStrategy from '../../strategies/HerbalTeaStrategy';
import MagicPillStrategy from '../../strategies/MagicPillStrategy';
import FervexStrategy from '../../strategies/FervexStrategy';
import DafalganStrategy from '../../strategies/DafalganStrategy';
import DefaultStrategy from '../../strategies/DefaultStrategy';

jest.mock('../../strategies/HerbalTeaStrategy');
jest.mock('../../strategies/MagicPillStrategy');
jest.mock('../../strategies/FervexStrategy');
jest.mock('../../strategies/DafalganStrategy');
jest.mock('../../strategies/DefaultStrategy');

describe('Pharmacy', () => {
  describe('updateBenefitValue method', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should update benefit value using HerbalTeaStrategy for Herbal Tea drug', () => {
      const herbalTeaDrug = { name: 'Herbal Tea', expiresIn: 5, benefit: 10 };
      const pharmacy = new Pharmacy([herbalTeaDrug]);
      pharmacy.updateBenefitValue();
      expect(HerbalTeaStrategy.mock.instances[0].update).toHaveBeenCalledWith(herbalTeaDrug);
    });

    it('should update benefit value using MagicPillStrategy for Magic Pill drug', () => {
      const magicPillDrug = { name: 'Magic Pill', expiresIn: 10, benefit: 20 };
      const pharmacy = new Pharmacy([magicPillDrug]);
      pharmacy.updateBenefitValue();
      expect(MagicPillStrategy.mock.instances[0].update).toHaveBeenCalledWith(magicPillDrug);
    });

    it('should update benefit value using FervexStrategy for Fervex drug', () => {
      const fervexDrug = { name: 'Fervex', expiresIn: 8, benefit: 30 };
      const pharmacy = new Pharmacy([fervexDrug]);
      pharmacy.updateBenefitValue();
      expect(FervexStrategy.mock.instances[0].update).toHaveBeenCalledWith(fervexDrug);
    });

    it('should update benefit value using DafalganStrategy for Dafalgan drug', () => {
      const dafalganDrug = { name: 'Dafalgan', expiresIn: 3, benefit: 25 };
      const pharmacy = new Pharmacy([dafalganDrug]);
      pharmacy.updateBenefitValue();
      expect(DafalganStrategy.mock.instances[0].update).toHaveBeenCalledWith(dafalganDrug);
    });

    it('should update benefit value using DefaultStrategy for unknown drug', () => {
      const unknownDrug = { name: 'UnknownDrug', expiresIn: 5, benefit: 15 };
      const pharmacy = new Pharmacy([unknownDrug]);
      pharmacy.updateBenefitValue();
      expect(DefaultStrategy.mock.instances[0].update).toHaveBeenCalledWith(unknownDrug);
    });
  });
});
