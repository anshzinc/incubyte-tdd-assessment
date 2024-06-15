const add = (numbers: string) => {
  if (numbers === "") return 0;
  let sum = 0;
  const nums = numbers.split(",").map((item) => Number(item));
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

export default add;
