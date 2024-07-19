/**
 * Use for loop to sum numbers from 1 to n.
 * - The time complexity of this function is O(n) because the loop runs n times.
 * - The space complexity is O(1) because the space used by the function is constant.
 */
export function sum_to_n_a(n: number): number {
  // if n is less than 1, return 0 as the sum
  if (n < 1) return 0;

  let sum: number = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

/**
 * Use the mathematical formula to calculate the sum of numbers from 1 to n.
 * - The time complexity of this function is O(1) because the function only performs a few operations.
 * - The space complexity is O(1) because the space used by the function is constant.
 */
export function sum_to_n_b(n: number): number {
  // if n is less than 1, return 0 as the sum
  if (n < 1) return 0;

  return (n * (n + 1)) / 2;
}

/**
 * Use recursion to sum numbers from 1 to n.
 * - The time complexity of this function is O(n) because the function calls itself n times.
 * - The space complexity is O(n) because the function calls itself n times.
 */
export function sum_to_n_c(n: number): number {
  // if n is less than 1, return 0 as the sum
  if (n < 1) return 0;

  if (n === 1) {
    return 1;
  }

  return n + sum_to_n_c(n - 1);
}
