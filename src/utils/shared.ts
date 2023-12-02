export function resolveAfter<T>(ms: number, value: T): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(value);
    }, ms);
  });
}

export function getRandomNumber(min: number, max: number): number {
  const randomDecimal = Math.random();
  const randomNumber = min + randomDecimal * (max - min);
  return randomNumber;
}
