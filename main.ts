import Person from "./Person.ts";
import PersonFactory from "./PersonFactory.ts";

const john: Person = PersonFactory.createPersonWithAge("one", "John", 20);
const jane: Person = john.setName("Jane");
const marta: Person = PersonFactory.createPersonWithAge("two", "Marta", 50);
console.log(john.name);
console.log(jane.name);
console.log(john.equals(jane));
const olderjane: Person = jane.setAge(jane.age.increment());
console.log(jane.age);
console.log(olderjane.age);
console.log(jane.equals(olderjane));
console.log(marta.name);
console.log(marta.equals(john));
