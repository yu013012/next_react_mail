import React, { ReactNode, useState } from 'react';
import { MyContext } from './MyContext';

interface MyContextProviderProps {
  children: ReactNode;
}

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<string>('');

  return (
    <MyContext.Provider value={{ count, setCount, count2, setCount2 }}>
      {children}
    </MyContext.Provider>
  );
}
