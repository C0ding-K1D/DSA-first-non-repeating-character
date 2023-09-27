const firstNonRepeatingCharacter = require("../firstNonRepeatingChar");

describe("firstNonRepeatingCharacter", () => {
  it("should return the index of first non repeating character", () => {
    const string = "abcdcaf";

    expect(firstNonRepeatingCharacter(string)).toBe(1);
  });

  it("should return the index of first non repeating character", () => {
    const string = "faadabcbbebdf";

    expect(firstNonRepeatingCharacter(string)).toBe(6);
  });

  it("should return the index of first non repeating character", () => {
    const string = "a";

    expect(firstNonRepeatingCharacter(string)).toBe(0);
  });

  it("should return the index of first non repeating character", () => {
    const string = "ab";

    expect(firstNonRepeatingCharacter(string)).toBe(0);
  });

  it("should return the index of first non repeating character", () => {
    const string = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy";

    expect(firstNonRepeatingCharacter(string)).toBe(25);
  });
});
