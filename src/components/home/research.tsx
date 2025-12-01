import Link from "@docusaurus/Link";
import { Paper, Typography, List, ListItem, Divider } from "@mui/material";

const ResearchInfo = () => {
  return (
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
  );
};

export default ResearchInfo;
