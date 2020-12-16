import { assertEquals } from "@std/testing/asserts.ts";
import { PersonStatus, EPersonStatus } from "./PersonStatus.ts";

Deno.test({
  name:
    "PersonStatus >> constructor >> should store the value passed as parameter",
  fn() {
    const status = new PersonStatus(EPersonStatus.ALIVE);
    assertEquals(status.value, EPersonStatus.ALIVE);
  },
});

Deno.test({
  name:
    "PersonStatus >> createAlive >> should create a PersonStatus with the ALIVE value",
  fn() {
    const status = PersonStatus.createAlive();
    assertEquals(status.value, EPersonStatus.ALIVE);
  },
});

Deno.test({
  name:
    "PersonStatus >> createDead >> should create a PersonStatus with the ALIVE value",
  fn() {
    const status = PersonStatus.createDead();
    assertEquals(status.value, EPersonStatus.DEAD);
  },
});

Deno.test({
  name:
    "PersonStatus >> equals >> should equal other PersonStatus with the same value",
  fn() {
    assertEquals(
      PersonStatus.createAlive(),
      new PersonStatus(EPersonStatus.ALIVE)
    );
    assertEquals(
      PersonStatus.createDead(),
      new PersonStatus(EPersonStatus.DEAD)
    );
  },
});

Deno.test({
  name:
    "PersonStatus >> toString >> should return the string value of the wrapped value",
  fn() {
    assertEquals(PersonStatus.createAlive().toString(), "ALIVE");
  },
});
