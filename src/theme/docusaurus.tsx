import { createTheme } from "@mui/material/styles";
import { useColorMode } from "@docusaurus/theme-common";
import { useMemo } from "react";

// Hook to create theme based on current color mode
export const useDocusaurusTheme = () => {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: colorMode === "dark" ? "dark" : "light",
          primary: {
            main: colorMode === "dark" ? "#25c2a0" : "#2e8555",
            light: colorMode === "dark" ? "#29d5b0" : "#33925d",
            dark: colorMode === "dark" ? "#21af90" : "#29784c",
          },
          text: {
            primary: colorMode === "dark" ? "#e3e3e3" : "#1c1e21",
            secondary: colorMode === "dark" ? "#b4b4b4" : "#606770",
          },
          background: {
            default: colorMode === "dark" ? "#1b1b1d" : "#ffffff",
            paper: colorMode === "dark" ? "#242526" : "#ffffff",
          },
        },
        typography: {
          fontFamily: "var(--ifm-font-family-base)",
        },
      }),
    [colorMode]
  );

  return theme;
};

// Default theme for backward compatibility
const docusaurusTheme = createTheme({
  palette: {
    primary: {
      main: "#2e8555",
      light: "#33925d",
      dark: "#29784c",
    },
    text: {
      primary: "#1c1e21",
      secondary: "#606770",
    },
    background: {
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "var(--ifm-font-family-base)",
  },
});

export default docusaurusTheme;
