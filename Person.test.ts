import { assert, assertEquals } from "@std/testing/asserts.ts";
import Person, { IPerson } from "./Person.ts";
import PersonAge from "./PersonAge.ts";
import { PersonStatus } from "./PersonStatus.ts";

const makePerson = (override?: Partial<IPerson>): Person =>
  new Person({
    id: override?.id ?? "aperson",
    name: override?.name ?? "John Doe",
    age: override?.age ?? new PersonAge(20),
    status: override?.status ?? PersonStatus.createAlive(),
  });

Deno.test({
  name: "Person >> constructor >> should set the members",
  fn() {
    const person = new Person({
      id: "one",
      name: "John",
      age: new PersonAge(0),
      status: PersonStatus.createAlive(),
    });
    assertEquals(person.id, "one");
    assertEquals(person.name, "John");
    assert(person.age.equals(new PersonAge(0)));
    assert(person.status.equals(PersonStatus.createAlive()));
  },
});

Deno.test({
  name:
    "Person >> setName >> should return a new Person with the specified name",
  fn() {
    const p1 = makePerson();
    const p2 = p1.setName("Jane Doe");
    assertEquals(p2.name, "Jane Doe");
  },
});

Deno.test({
  name: "Person >> setName >> should not mutate the original person",
  fn() {
    const p1 = makePerson();
    p1.setName("Jane Doe");
    assertEquals(p1.name, "John Doe");
  },
});

Deno.test({
  name: "Person >> setAge >> should return a new Person with the specified age",
  fn() {
    const p1 = makePerson();
    const p2 = p1.setAge(new PersonAge(25));
    assert(p2.age.equals(new PersonAge(25)));
  },
});

Deno.test({
  name: "Person >> setAge >> should not mutate the original person",
  fn() {
    const p1 = makePerson();
    assert(p1.age.equals(new PersonAge(20)));
  },
});

Deno.test({
  name:
    "Person >> setStatus >> should return a new Person with the specified status",
  fn() {
    const p1 = makePerson();
    const p2 = p1.setStatus(PersonStatus.createDead());
    assert(p2.status.equals(PersonStatus.createDead()));
  },
});

Deno.test({
  name: "Person >> setStatus >> should not mutate the original person",
  fn() {
    const p1 = makePerson();
    assert(p1.status.equals(PersonStatus.createAlive()));
  },
});

Deno.test({
  name: "Person >> equals >> should compare id equality",
  fn() {
    const p1 = makePerson({ id: "one" });
    const p2 = makePerson({ id: "two" });
    assertEquals(p1.age, p2.age);
    assertEquals(p1.id, "one");
    assertEquals(p2.id, "two");
    assert(!p1.equals(p2));
  },
});
