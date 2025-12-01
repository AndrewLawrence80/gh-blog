import { createTheme } from "@mui/material/styles";

// docusaurus theme customization, sync with `src/css/custom.css`
const docusaurusTheme = createTheme({
  palette: {
    primary: {
      main: "#2e8555",
      light: "#33925d",
      dark: "#29784c",
    },
  },
  typography: {
    fontFamily: "var(--ifm-font-family-base)",
  },
});

export default docusaurusTheme;
