import { assert, assertEquals, assertThrows } from "@std/testing/asserts.ts";
import PersonAge, { NegativeAgeError } from "./PersonAge.ts";

Deno.test({
  name: "PersonAge >> constructor >> should accept creating a zero age",
  fn() {
    const age = new PersonAge(0);
    assertEquals(age.value, 0);
  },
});

Deno.test({
  name: "PersonAge >> constructor >> should accept creating an old age",
  fn() {
    const age = new PersonAge(90);
    assertEquals(age.value, 90);
  },
});

Deno.test({
  name: "PersonAge >> constructor >> should refuse creating a negative age",
  fn() {
    assertThrows(() => new PersonAge(-1), NegativeAgeError);
  },
});

Deno.test({
  name:
    "PersonAge >> increment >> should returns a PersonAge one year in the future",
  fn() {
    assert(new PersonAge(20).increment().equals(new PersonAge(21)));
  },
});

Deno.test({
  name:
    "PersonAge >> equals >> should equal a different PersonAge wrapping the same value",
  fn() {
    assert(new PersonAge(2).equals(new PersonAge(2)));
  },
});

Deno.test({
  name:
    "PersonAge >> equals >> should not equal a different PersonAge wrapping a different value",
  fn() {
    assert(!new PersonAge(2).equals(new PersonAge(0)));
  },
});

Deno.test({
  name: "PersonAge >> toString >> should return the string value",
  fn() {
    assertEquals(`${new PersonAge(5)}`, "5");
  },
});
