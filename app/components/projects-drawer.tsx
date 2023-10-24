import {
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

export default function ProjectsDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          "margin-top": "100px",
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem key={"optima"} disablePadding>
            <Link href="/projects/optima">
              <Typography variant="h5" className="m-5">
                {"Optima"}
              </Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem key={"paul-teoh"} disablePadding>
            <Link href="/projects/paul-teoh">
              <Typography variant="h5" className="m-5">
                {"Paul Teoh Chartered Accountant"}
              </Typography>
            </Link>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Drawer>
  );
}
