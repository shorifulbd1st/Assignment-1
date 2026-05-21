const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};