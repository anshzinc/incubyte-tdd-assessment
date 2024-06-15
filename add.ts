const add = (numbers: string) => {
  if (numbers === "") return 0;
  // Check if string has custom delimiter
  let delimiter = ",";
  if (numbers.indexOf("//") === 0 && numbers.indexOf("\n") === 3) {
    delimiter = numbers[2];
  }
  let sum = 0;
  const nums = numbers
    .replace(/\n/g, ",") // treat newlines as default delimiter (comma)
    .split(delimiter)
    .map((item) => (!isNaN(Number(item)) ? Number(item) : 0));
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

export default add;
