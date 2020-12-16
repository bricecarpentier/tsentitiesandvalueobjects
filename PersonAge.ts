import IComparable from "./IComparable.ts";
import Person from "./Person.ts";

export class NegativeAgeError extends Error {
  constructor(readonly age: number) {
    super("negative age is not allowed");
    this.age = age;
  }
}

export default class PersonAge implements IComparable {
  readonly value: number;

  constructor(age: number) {
    if (age < 0) {
      throw new NegativeAgeError(age);
    }
    this.value = age;
  }

  increment(): PersonAge {
    return new PersonAge(this.value + 1);
  }

  equals(obj: any): boolean {
    if (!(obj instanceof PersonAge)) return false;
    return this.value === obj.value;
  }

  toString(): string {
    return `${this.value}`;
  }
}
