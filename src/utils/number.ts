export const add = (n1: number) => {
  return n1 + 1;
};

export const asyncAdd = async (
  n1: number,
  delay: number = 100
): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n1 + 1);
    }, delay);
  });
};

export const fetchNumber = async (url: string): Promise<number> => {
  // 模拟异步获取数据
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes("error")) {
        reject(new Error("Failed to fetch number"));
      } else {
        resolve(42);
      }
    }, 100);
  });
};
