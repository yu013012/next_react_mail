import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

export const MyContext = createContext('');

export function useMyContext() {
  const context = useContext(MyContext);
  console.log(context)
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}
