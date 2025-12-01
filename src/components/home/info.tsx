import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Avatar, Box, Container, Grid, Link, Typography } from "@mui/material";

const BasicInfo = () => {
  const { siteConfig } = useDocusaurusContext();
  const blogURL = `${siteConfig.baseUrl}blog`;
  return (
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
  );
};

export default BasicInfo;
