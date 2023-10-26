"use client";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown";
import { MenuItems } from "../interfaces/dropdown-props";

const companyName = "FLC Consulting";
const designAndEngineeringMenuItems: MenuItems[] = [
  {
    title: "Architectural",
    link: "/design-and-engineering/architectural",
  },
  {
    title: "Structural",
    link: "/design-and-engineering/structural",
  },
  {
    title: "Mechanical",
    link: "/design-and-engineering/mechanical",
  },
  {
    title: "Electrical",
    link: "/design-and-engineering/electrical",
  },
];

export default function Header() {
  const theme = useTheme();
  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Image
            className="m-5"
            src="/FlcLogo.jpg"
            alt="FLC Logo"
            width={50}
            height={50}
          />
          <Link href="/">
            <Typography variant="h5" className="m-5" textAlign="center">
              {companyName}
            </Typography>
          </Link>
          <Dropdown
            title="Design & Engineering"
            menuItems={designAndEngineeringMenuItems}
          ></Dropdown>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
