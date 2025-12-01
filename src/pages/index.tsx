import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import docusaurusTheme from "../theme/docusaurus";
import { ThemeProvider } from "@mui/material/styles";


export default function Home(): ReactNode {
  return (
    <ThemeProvider theme={docusaurusTheme}>
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}
