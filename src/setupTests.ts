// src/setupTests.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";

// 每次测试后自动清理DOM
afterEach(() => {
  cleanup();
});

// 全局mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
) as jest.Mock;
