"use client";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./dropdown";
import MobileDrawer from "./mobile-drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItems } from "../interfaces/menu-items";

const companyName = "FLC Consulting";
const phoneNumber = "403-680-4086";
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
const projectManagementMenuItems: MenuItems[] = [
  {
    title: "Commercial",
    link: "/project-management/commercial",
  },
  {
    title: "Tenant Improvement",
    link: "/project-management/tenant-improvement",
  },
  {
    title: "Industrial",
    link: "/project-management/industrial",
  },
  {
    title: "Residential",
    link: "/project-management/residential",
  },
];

export default function Header() {
  const theme = useTheme();

  const [drawerState, setDrawerState] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: 2 }}
              onClick={() => setDrawerState(!drawerState)}
            >
              <MenuIcon />
            </IconButton>
            <MobileDrawer
              open={drawerState}
              setDrawerState={setDrawerState}
            ></MobileDrawer>
          </Box>
          <Image
            className="m-5"
            src="/FlcLogo.jpg"
            alt="FLC Logo"
            width={80}
            height={80}
          />
          <Box className="flex flex-col mx-3">
            <Link href="/">
              <Typography variant="h5" textAlign="center">
                {companyName}
              </Typography>
            </Link>
            <Typography variant="subtitle2">{phoneNumber}</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Dropdown
              title="Design & Engineering"
              menuItems={designAndEngineeringMenuItems}
            ></Dropdown>
            <Dropdown
              title="Project Management"
              menuItems={projectManagementMenuItems}
            ></Dropdown>
            <Link
              href="/contact-us"
              className="flex items-center m-5 uppercase text-xl"
            >
              Contact Us
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
