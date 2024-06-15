const add = (numbers: string) => {
  if (numbers === "") return 0;
  let sum = 0;
  const nums = numbers
    .replace(/\n/g, ",") // treat newlines as default delimiter (comma)
    .split(",")
    .map((item) => (!isNaN(Number(item)) ? Number(item) : 0));
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

export default add;
