import {
  LinearProgress,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";

const SkillInfo = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        minWidth: "30%",
        marginTop: 8,
        marginLeft: 4,
        minHeight: "440px",
        flexDirection: "column"
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
  );
};

export default SkillInfo;
