"use client";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./dropdown";
import { MenuItems } from "../interfaces/dropdown-props";

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
  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Image
            className="m-5"
            src="/FlcLogo.jpg"
            alt="FLC Logo"
            width={80}
            height={80}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/">
              <Typography variant="h5" textAlign="center">
                {companyName}
              </Typography>
            </Link>
            <Typography variant="subtitle2">{phoneNumber}</Typography>
          </Box>
          <Dropdown
            title="Design & Engineering"
            menuItems={designAndEngineeringMenuItems}
          ></Dropdown>
          <Dropdown
            title="Project Management"
            menuItems={projectManagementMenuItems}
          ></Dropdown>
          <Link href="/contact-us" className="m-5 uppercase">
            Contact Us
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
