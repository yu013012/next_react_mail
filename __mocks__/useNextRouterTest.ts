import { render } from '@testing-library/react';
import { NextRouter } from 'next/router';

// NextRouterをモック
const mockedRouter: Partial<NextRouter> = {
  push: jest.fn(),
  prefetch: async () => undefined,
  // 他に必要なメソッドやプロパティがあれば追加
};

const useRouter = (): NextRouter => {
  return {
    ...mockedRouter,
    // 他に必要なメソッドやプロパティがあれば追加
  };
};

export { useRouter };
