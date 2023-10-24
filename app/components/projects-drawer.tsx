"use client";
import {
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

const pages = [
  "Optima",
  "Paul Teoh Chartered Accountant",
  "Dah Shin International Food Processing",
];
const links = ["/projects/optima", "/projects/paul-teoh", "/projects/dah-shin"];

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
          marginTop: "100px",
        },
      }}
    >
      <Box sx={{ overflow: "auto" }}>
        <List>
          {pages.map((page, index) => (
            <Box key={page}>
              <ListItem>
                <Link href={links[index]}>
                  <Typography
                    variant="h5"
                    className={`m-5 ${
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
