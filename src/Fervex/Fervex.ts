import Drug from '../Model/Drug';

export default class Fervex extends Drug {
  private upgradeBenefits() {
    if (this.getBenefit() >= 0) {
      if (this.getExpiresIn() <= 5) {
        this.setBenefit(3);
      } else if (this.getExpiresIn() <= 10) {
        this.setBenefit(2);
      } else if (this.getExpiresIn() > 0) {
        this.setBenefit(1);
      }
    }
  }

  private downgradeBenefits() {
    if (this.getExpiresIn() < 0) {
      this.setBenefit(-this.getBenefit());
    }
  }

  private updateBenefits() {
    this.upgradeBenefits();
    this.downgradeBenefits();
  }

  private downgradeExpiresDate() {
    this.setExpiresIn(-1);
  }

  public computeDrug() {
    this.downgradeExpiresDate();
    this.updateBenefits();
  }
}
