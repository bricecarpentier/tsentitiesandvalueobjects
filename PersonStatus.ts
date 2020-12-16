import IComparable from "./IComparable.ts";

export enum EPersonStatus {
  ALIVE = "ALIVE",
  DEAD = "DEAD",
}

export class PersonStatus implements IComparable {
  static createAlive(): PersonStatus {
    return new PersonStatus(EPersonStatus.ALIVE);
  }

  static createDead(): PersonStatus {
    return new PersonStatus(EPersonStatus.DEAD);
  }

  constructor(readonly value: EPersonStatus) {
    this.value = value;
  }

  equals(obj: any): boolean {
    if (!(obj instanceof PersonStatus)) return false;
    return this.value === obj.value;
  }

  toString(): string {
    return this.value;
  }
}
