/**
 *
 * @param numbers A string of numbers delimited by comma. A custom delimiter
 * can be defined at the beginning of the string like:  "//[delimiter]\n[numbers…]"
 * For example, "//;\n1;2" where the delimiter is ";".
 *
 *
 * It does not support negative numbers.
 *
 * @returns Number (sum of numbers in the string)
 */
const add = (numbers: string) => {
  if (numbers === "") return 0;
  // Check if string has custom delimiter
  let delimiter = ",";
  if (numbers.indexOf("//") === 0 && numbers.indexOf("\n") === 3) {
    delimiter = numbers[2];
  }
  let sum = 0; // Sum of all numbers in the string
  let negativeNums = []; // All negative numbers found in the string
  let hasNegatives = false;
  const numsList = numbers
    .replace(/\n/g, delimiter) // treat newlines as default delimiter (comma)
    .replace(/\/\//g, delimiter) // replace custom delimiter identifying chars //  with delimiter
    .split(delimiter);

  let isNagative = false;
  for (let i = 0; i < numsList.length; i++) {
    const item = numsList[i];
    if (item === "-") {
      if (isNagative) {
        // When input has double - like "//;\n1;2;-3;--2"
        throw new Error("Invalid input string provided");
      }
      isNagative = true;
    } else {
      isNagative = false;
      const currentNum = Number(isNagative ? "-" + item : item);
      if (isNaN(currentNum)) {
        throw new Error("Invalid input string provided");
      }
      if (currentNum < 0) {
        hasNegatives = true;
        negativeNums.push(currentNum);
      } else {
        sum += currentNum;
      }
    }
  }

  if (hasNegatives) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(",")}`);
  }
  return sum;
};

export default add;
