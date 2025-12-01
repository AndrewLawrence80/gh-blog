import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Typography,
} from "@mui/material";

const EducationInfo = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        minWidth: "30%",
        marginTop: 8,
        minHeight: "440px",
        flexDirection: "column",
      }}
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
  );
};

export default EducationInfo;
