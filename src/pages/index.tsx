import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import docusaurusTheme, { useDocusaurusTheme } from "../theme/docusaurus";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "@docusaurus/Link";

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
  const { siteConfig } = useDocusaurusContext();
  const blogURL = `${siteConfig.baseUrl}blog`;
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
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="andrew"
          src="img/avatar.jpg"
          sx={{ width: "15%", height: "15%" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 4,
          }}
        >
          <Typography variant="h4">Andrew</Typography>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            Backend Engineer, Tencent Inc.
          </Typography>
          <Grid container sx={{ marginTop: 2 }}>
            <Grid size={{ xs: 4, md: 4 }}>
              <Typography variant="h5" color="text.secondary">
                Position
              </Typography>
            </Grid>
            <Grid size={{ xs: 8, md: 8 }}>
              <Typography variant="h5" color="text.secondary">
                China
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 4 }}>
              <Typography variant="h5" color="text.secondary">
                Email
              </Typography>
            </Grid>
            <Grid size={{ xs: 8, md: 8 }}>
              <Typography variant="h5" color="text.secondary">
                yszhouyx@outlook.com
              </Typography>
            </Grid>
            <Grid size={{ xs: 4, md: 4 }}>
              <Typography variant="h5" color="text.secondary">
                Blog
              </Typography>
            </Grid>
            <Grid size={{ xs: 8, md: 8 }}>
              <Typography variant="h5" color="text.secondary">
                <Link href={blogURL}>Andrew's Blog</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={2}
          sx={{ minWidth: "30%", marginTop: 8, minHeight: "440px" }}
        >
          <Typography variant="h4" sx={{ marginTop: 2, marginLeft: 2 }}>
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="jlu" src="img/jlu.ico" />
              </ListItemAvatar>
              <Box>
                <Typography variant="h6">Master's Degree</Typography>
                <Typography variant="h6">
                  Computer Science and Technology
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  Jilin University
                </Typography>
              </Box>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="cqupt" src="img/cqupt.ico" />
              </ListItemAvatar>
              <Box>
                <Typography variant="h6">Bachelor's Degree</Typography>
                <Typography variant="h6">
                  Computer Science and Technology
                </Typography>
                <Typography variant="h6" sx={{ color: "text.secondary" }}>
                  Chongqing University of Posts and Telecommunications
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            minWidth: "30%",
            marginTop: 8,
            marginLeft: 4,
            minHeight: "440px",
          }}
        >
          <Typography variant="h4" sx={{ marginTop: 2, marginLeft: 2 }}>
            Skill
          </Typography>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                Go
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ width: "100%", marginTop: 2 }}
              ></LinearProgress>
            </ListItem>
          </List>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                Java
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ width: "100%", marginTop: 2 }}
              ></LinearProgress>
            </ListItem>
          </List>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                C++
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ width: "100%", marginTop: 2 }}
              ></LinearProgress>
            </ListItem>
          </List>
          <List>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                Python
              </Typography>
              <LinearProgress
                variant="determinate"
                value={50}
                sx={{ width: "100%", marginTop: 2 }}
              ></LinearProgress>
            </ListItem>
          </List>
        </Paper>
        <Paper
          elevation={2}
          sx={{
            minWidth: "30%",
            marginTop: 8,
            marginLeft: 4,
            minHeight: "440px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ marginTop: 2, marginLeft: 2 }}>
            Project & Research
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h6">
                Multi-Agent Coordination SDK in Golang
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <Typography variant="h6">
                <Link href="https://ieeexplore.ieee.org/document/10817616">
                  A Survey of Change Point Detection in Dynamic Graphs (CCF-A)
                </Link>
              </Typography>
            </ListItem>
          </List>
        </Paper>
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
