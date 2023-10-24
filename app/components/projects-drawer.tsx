"use client";
import {
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";

const drawerWidth = 240;

const pages = [
  "Optima",
  "Paul Teoh Chartered Accountant",
  "Dah Shin International Food Processing",
  "Hertz Car Rentail - Avendia Centre",
  "Residential Construction - Rocky Ridge",
  "Korea Plaza",
  "Loring Tarcore Laboratory",
  "Thai Nongkai Restaurant",
];
const links = [
  "/projects/optima",
  "/projects/paul-teoh",
  "/projects/dah-shin",
  "/projects/hertz-avendia",
  "/projects/rocky-ridge",
  "/projects/korea-plaza",
  "/projects/loring-tarcore",
  "/projects/thai-nongkai",
];

export default function ProjectsDrawer() {
  const pathname = usePathname();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          [`& .MuiToolbar-root`]: {
            minHeight: "100px",
          },
        },
      }}
    >
      <Toolbar />
      <Box>
        <List>
          {pages.map((page, index) => (
            <Box key={page}>
              <ListItem>
                <Link href={links[index]}>
                  <Typography
                    variant="h5"
                    className={`${
                      pathname === links[index] ? "font-bold" : ""
                    }`}
                  >
                    {page}
                  </Typography>
                </Link>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
