"use client";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const companyName = "FLC Consulting";
const pages = ["Projects"];
const links = ["/projects"];

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
          <Box
            className="m-5"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, index) => (
              <Link key={page} href={links[index]} className="m-5">
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
