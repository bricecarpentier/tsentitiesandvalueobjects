import IComparable from "./IComparable.ts";
import PersonAge from "./PersonAge.ts";
import { PersonStatus } from "./PersonStatus.ts";

export interface IPerson {
  readonly id: string;
  readonly name: string;
  readonly age: PersonAge;
  readonly status: PersonStatus;
}

export default class Person implements IPerson, IComparable {
  readonly id: string;
  readonly name: string;
  readonly age: PersonAge;
  readonly status: PersonStatus;

  constructor({ id, name, age, status }: IPerson) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.status = status;
  }

  setName(name: string): Person {
    return new Person({ ...this, name });
  }

  setAge(age: PersonAge): Person {
    return new Person({ ...this, age });
  }

  setStatus(status: PersonStatus) {
    return new Person({ ...this, status });
  }

  equals(obj: any): boolean {
    if (!(obj instanceof Person)) return false;
    return this.id === obj.id;
  }
}
