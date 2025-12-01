import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import { useDocusaurusTheme } from "../theme/docusaurus";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeProvider } from "@mui/material/styles";
import {
  Container,
  Typography,
} from "@mui/material";
import BasicInfo from "../components/home/info";
import EducationInfo from "../components/home/education";
import SkillInfo from "../components/home/skill";
import ResearchInfo from "../components/home/research";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        minHeight: { xs: "20vh", sm: "20vh", md: "20vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <Typography variant="h2" color="primary.contrastText">
        Welcome to {siteConfig.title}
      </Typography>
      <Typography variant="h3" color="primary.contrastText">
        {siteConfig.tagline}
      </Typography>
    </Container>
  );
};

const HomepageBody = () => {
  return (
    <Container
      sx={{
        minHeight: { xs: "80vh", sm: "80vh", md: "80vh" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      <BasicInfo />
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <EducationInfo />
        <SkillInfo />
        <ResearchInfo/>
      </Container>
    </Container>
  );
};

// ✅ 正确：在 Layout 内部调用 hook
const HomeContent = () => {
  const theme = useDocusaurusTheme(); // ✅ 此时 ColorModeProvider 已经可用

  return (
    <ThemeProvider theme={theme}>
      <HomepageHeader />
      <HomepageBody />
    </ThemeProvider>
  );
};

export default function Home(): ReactNode {
  return (
    <Layout>
      <HomeContent />
    </Layout>
  );
}
