import React, { createContext, useEffect, useState } from 'react';
import { Props } from '../components/Container';

interface GlobalContextData {
  isPTBR: boolean;
  activePage: string;
  innerWidth: number;
  changeLanguage: () => void;
  changeActivePage: (page: string) => void;
}

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalProvider = ({ children }: Props) => {
  const [isPTBR, setIsPTBR] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [innerWidth, setInnerWidth] = useState(null);

  const changeLanguage = () => setIsPTBR(!isPTBR);

  const changeActivePage = (page: string) => setActivePage(page);

  useEffect(() => window.addEventListener('resize', () => setInnerWidth(window.innerWidth)), []);

  return (
    <GlobalContext.Provider
      value={
        {
          innerWidth,
          activePage,
          changeActivePage,
          changeLanguage,
          isPTBR,
        } as GlobalContextData
      }
    >
      {children}
    </GlobalContext.Provider>
  );
};
