import Person from "./Person.ts";
import PersonAge from "./PersonAge.ts";
import { PersonStatus } from "./PersonStatus.ts";

export default class PersonFactory {
  static createPerson(id: string, name: string): Person {
    return new Person({
      id,
      name,
      age: new PersonAge(0),
      status: PersonStatus.createAlive(),
    });
  }

  static createPersonWithAge(id: string, name: string, age: number): Person {
    return new Person({
      id,
      name,
      age: new PersonAge(age),
      status: PersonStatus.createAlive(),
    });
  }
}
