import { createContext, useEffect, useState } from "react";

export const BurgerContext = createContext({
  isActive: true,
  setIsActive: null,
});

export const BurgerProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const value = { isActive, setIsActive };

  useEffect(() => {
    setIsActive(isActive);
  }, []);

  return (
    <BurgerContext.Provider value={value}>{children}</BurgerContext.Provider>
  );
};
