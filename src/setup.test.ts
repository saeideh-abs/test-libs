let animals: string[] = [];

describe("animals array", () => {
  // put beforeEach, afterEach and ... into describe in order to just run it for these groups of tests not all tests
  beforeAll(() => {
    console.log("before all");
    animals = ["elephant", "tiger", "bear", "zebra"];
  });

  beforeEach(() => {
    animals = ["elephant", "tiger", "bear", "zebra"];
  });

  afterEach(() => {
    console.log("after each check");
  });

  it("add animal to end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toEqual(4);
  });
});
