'use client'

import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavAllOpen, setIsNavAllOpen] = useState(false);

  const toggleNavAll = () => {
    setIsNavAllOpen((prev) => !prev);
  };

  const closeNavAll = () => {
    setIsNavAllOpen(false);
  };

  return (
    <NavContext.Provider value={{ isNavAllOpen, toggleNavAll, closeNavAll }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
