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

export function groupArrayBySameKey<
  T extends Record<string, any>,
  K extends keyof T
>(arr: T[], key: K): Record<T[K], T[]> {
  const grouped = arr.reduce((result: Record<T[K], T[]>, obj: T) => {
    const groupByKey = obj[key];
    if (!result[groupByKey as T[K]]) {
      result[groupByKey as T[K]] = [];
    }
    result[groupByKey as T[K]].push(obj);
    return result;
  }, {} as Record<T[K], T[]>);

  return grouped;
}
