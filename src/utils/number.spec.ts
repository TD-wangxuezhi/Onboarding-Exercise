import { add } from "./number";

describe("add func test", () => {
  it("input n return n+1", () => {
    const n = 100;
    const res = add(n);
    expect(res).toEqual(101);
  });

  it("input n return n+1", () => {
    const n = 90;
    const res = add(n);
    expect(res).toEqual(91);
  });
});
