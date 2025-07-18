import { add, asyncAdd, fetchNumber } from "../number";

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

describe("asyncAdd func test", () => {
  it("should return n+1 after delay", async () => {
    const n = 50;
    const result = await asyncAdd(n);
    expect(result).toBe(51);
  });

  it("should return n+1 with custom delay", async () => {
    const n = 25;
    const startTime = Date.now();
    const result = await asyncAdd(n, 200);
    const endTime = Date.now();

    expect(result).toBe(26);
    expect(endTime - startTime).toBeGreaterThanOrEqual(200);
  });

  it("should handle multiple async calls", async () => {
    const promises = [asyncAdd(1), asyncAdd(2), asyncAdd(3)];

    const results = await Promise.all(promises);
    expect(results).toEqual([2, 3, 4]);
  });
});

describe("fetchNumber func test", () => {
  it("should return 42 for valid URL", async () => {
    const result = await fetchNumber("https://api.example.com/number");
    expect(result).toBe(42);
  });

  it("should reject with error for invalid URL", async () => {
    await expect(fetchNumber("https://api.example.com/error")).rejects.toThrow(
      "Failed to fetch number"
    );
  });

  it("should handle async error using try-catch", async () => {
    try {
      await fetchNumber("https://api.example.com/error");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe("Failed to fetch number");
    }
  });
});
