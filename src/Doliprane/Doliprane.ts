import Drug from '../Model/Drug';

export default class Dafalgan extends Drug {
  public downgradeDrug() {
    if (this.getBenefit() > 0 && this.getExpiresIn() < 0) {
      this.setBenefit(-2);
    } else if (this.getExpiresIn() >= 0) {
      this.setBenefit(-1);
    }
  }

  private downgradeExpiresDate() {
    this.setExpiresIn(-1);
  }

  public computeDrug() {
    this.downgradeExpiresDate();
    this.downgradeDrug();
  }
}
