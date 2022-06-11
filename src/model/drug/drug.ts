import { DrugName, DrugNameType } from '../../type/DrugName';

export class Drug {
  private _internalBenefit: number;

  constructor(
    public readonly name: DrugName | DrugNameType,
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
    this._internalBenefit = Math.max(0, value);
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
  public updateValues() {
    this.benefit -= this.isExpired() ? 2 : 1;
    this.expiresIn -= 1;
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
