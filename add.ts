const add = (numbers: string) => {
  if (numbers === "") return 0;
  // Check if string has custom delimiter
  let delimiter = ",";
  if (numbers.indexOf("//") === 0 && numbers.indexOf("\n") === 3) {
    delimiter = numbers[2];
  }
  let sum = 0;
  const nums = numbers
    .replace(/\n/g, delimiter) // treat newlines as default delimiter (comma)
    .replace(/\/\//g, delimiter)
    .split(delimiter)
    .map((item) => {
      if (isNaN(Number(item))) {
        throw new Error("Invalid input string provided");
      }
      return Number(item);
    });

  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

export default add;
