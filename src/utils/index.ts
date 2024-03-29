export function add(a: number) {
  return (b: number) => a + b;
}

export const add3 = add(3);

export function multiply(a: number, b: number) {
  return a * b;
}

export function sumul(a: number, b: number) {
  return { add: add(a)(b), mul: multiply(a, b) };
}
