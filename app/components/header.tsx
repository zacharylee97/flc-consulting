import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const companyName = "FLC Consulting";
const pages = ["Projects", "Contact Us"];
const links = ["/projects", "contactUs"];

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
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
