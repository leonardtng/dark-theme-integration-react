import React from "react";
import ThemeContext from "./contexts/ThemeContext";
import AppTheme from "./components/common/AppTheme";

const App: React.FC = () => {
  return (
    // If you had any components in App.tsx, you can move them to the Main.tsx file so they can use your theme's color palette
    <ThemeContext>
      <AppTheme />
    </ThemeContext>
  );
} 

export default App;
