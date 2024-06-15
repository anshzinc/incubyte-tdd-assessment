import add from "./add";

test("should handle empty string", () => {
  expect(add("")).toBe(0);
});

test("should handle string of comma separated numbers", () => {
  expect(add("1")).toBe(1);
  expect(add("1,5")).toBe(6);
});

test("should handle any amount of integers", () => {
  expect(add("1,0,1,0,2,3,4,5,6,7,10")).toBe(39);
});

test("should handle multiple subsequent commans", () => {
  expect(add("1,0,1,0,2,,,3,4,5,6,7,,10,")).toBe(39);
});

test("should handle new lines between numbers", () => {
  expect(add("1,0,1,0,2,,,3,4,5,6\n7,,10,")).toBe(39);
  expect(add("1,0,1,0,2,,,3\n\n\n4,5,6\n7,,10,")).toBe(39);
  expect(add("\n1,0,1,0,2,,,3\n\n\n4,5,6\n7,,10\n")).toBe(39);
  expect(add("\n1,0,1,0,,,3\n\n\n4,5,6\n7,,10,")).toBe(37);
  expect(add("0,1,0,2,,,3\n\n\n4,5,6\n7,,10\n,\n\n,,")).toBe(38);
});

test("should handle custom delimiters at the beginning of string", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should handle invalid input string", () => {
  expect(() => add("1;2//1#2.1,,2,3;")).toThrow(
    "Invalid input string provided"
  );
  expect(() => add("//;\n1;2//1#2.1,,2,3;")).toThrow(
    "Invalid input string provided"
  );
  expect(() => add("//;\n1;2;-3;--2")).toThrow("Invalid input string provided");
});

test("should handle negative numbers", () => {
  expect(() => add("1,2,-3")).toThrow("negative numbers not allowed -3");
  expect(() => add("//;\n1;2;-3")).toThrow("negative numbers not allowed -3");
  expect(() => add("1,2,-3, -2")).toThrow("negative numbers not allowed -3,-2");
  expect(() => add("//;\n1;2;-3;-2")).toThrow(
    "negative numbers not allowed -3,-2"
  );
});
