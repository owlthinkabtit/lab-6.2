export const retryPromise = <T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number,
): Promise<T> => {
  return fn().catch((error) => {
    if (retries > 0) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Retrying...attemps left: ${retries}`);
          resolve(retryPromise(fn, retries - 1, delay));
        }, delay);
      });
    }
    return Promise.reject(error);
  });
};