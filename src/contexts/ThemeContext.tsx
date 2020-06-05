import React, { useState, createContext, ReactNode } from "react";

interface ThemeContextProps {
  lightMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {
    lightMode: true,
    toggleTheme: () => { },
  }
)

interface ThemeContextProviderProps {
  children?: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = (props: ThemeContextProviderProps) => {

  const [lightMode, setlightMode] = useState<boolean>(!(localStorage.getItem("theme") === "dark"));
  const toggleTheme = () => {
    if (lightMode) {
      setlightMode(false);
      localStorage.setItem("theme", "dark");
    } else {
      setlightMode(true);
      localStorage.removeItem("theme");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        lightMode: lightMode,
        toggleTheme: toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;