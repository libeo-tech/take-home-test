import Drug from '../Model/Drug';

export default class HerbalTea extends Drug {
  private upgradeBenefits() {
    if (this.getExpiresIn() >= 0) {
      this.setBenefit(1);
    } else if (this.getExpiresIn() < 0) {
      this.setBenefit(2);
    }
  }

  private downgradeExpiresDate() {
    this.setExpiresIn(-1);
  }

  public computeDrug() {
    this.downgradeExpiresDate();
    this.upgradeBenefits();
  }
}
