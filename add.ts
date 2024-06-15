const add = (numbers: string) => {
  if (numbers === "") return 0;
  // Check if string has custom delimiter
  let delimiter = ",";
  if (numbers.indexOf("//") === 0 && numbers.indexOf("\n") === 3) {
    delimiter = numbers[2];
  }
  let sum = 0;
  let negativeNums = [];
  let hasNegatives = false;
  const numsList = numbers
    .replace(/\n/g, delimiter) // treat newlines as default delimiter (comma)
    .replace(/\/\//g, delimiter)
    .split(delimiter);

  let nums = [];
  let isNagative = false;
  for (let i = 0; i < numsList.length; i++) {
    const item = numsList[i];
    if (item === "-") {
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
        nums.push(currentNum);
      }
    }
  }

  if (hasNegatives) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(",")}`);
  }

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

export default add;
