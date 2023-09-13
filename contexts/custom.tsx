import React, { createContext, useContext, useState } from 'react';

// コンテクストを作成
const MyContext = createContext();

// プロバイダーコンポーネントを作成
export function MyContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
}

// カスタムフックを作成してコンテクストを使用
export function useMyContext() {
  return useContext(MyContext);
}
