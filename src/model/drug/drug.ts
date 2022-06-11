import { boundNumber } from '../../tools/boundNumber';
import { DrugName } from '../../type/DrugName';

export abstract class Drug {
  private _internalBenefit: number;

  protected constructor(
    public readonly name: DrugName,
    public expiresIn: number,
    benefit: number
  ) {
    this.benefit = benefit;
  }

  public get benefit(): number {
    return this._internalBenefit;
  }

  /**
   * Makes benefit >= 0 before setting it
   * @param value
   */
  public set benefit(value: number) {
    this._internalBenefit = boundNumber(value, 0, 50);
  }

  /**
   * Returns true if expiresIn <= 0
   */
  public isExpired() {
    return this.expiresIn <= 0;
  }

  /**
   * Update internal expiration and benefit values according to drug's rules
   */
  public updateValues(): this {
    this.benefit -= this.isExpired() ? 2 : 1;
    this.expiresIn -= 1;

    return this;
  }

  /**
   * Ensures output consistency when using JSON.stringify()
   */
  public toJSON() {
    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit,
    };
  }

  /**
   * Ensures output consistency when using Drug.toString()
   */
  public toString(): string {
    return JSON.stringify(this);
  }
}
