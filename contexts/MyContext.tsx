import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type MyContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count2: string;
  setCount2: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<MyContextType | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}