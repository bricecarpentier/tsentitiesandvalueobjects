import { assert, assertEquals } from "@std/testing/asserts.ts";
import PersonAge from "./PersonAge.ts";
import PersonFactory from "./PersonFactory.ts";
import { PersonStatus } from "./PersonStatus.ts";

Deno.test({
  name: "PersonFactory >> createPerson >> should create a live newborn",
  fn() {
    const p = PersonFactory.createPerson("one", "John");
    assertEquals(p.id, "one");
    assertEquals(p.name, "John");
    assert(p.age.equals(new PersonAge(0)));
    assert(p.status.equals(PersonStatus.createAlive()));
  },
});

Deno.test({
  name:
    "PersonFactory >> createPersonWithAge >> should create a live person of the specified age",
  fn() {
    const p = PersonFactory.createPersonWithAge("one", "John", 20);
    assertEquals(p.id, "one");
    assertEquals(p.name, "John");
    assert(p.age.equals(new PersonAge(20)));
    assert(p.status.equals(PersonStatus.createAlive()));
  },
});
