import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";

const companyName = "FLC Consulting Inc.";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Image
            className="m-5"
            src="/flcLogo.jpg"
            alt="FLC Logo"
            width={50}
            height={50}
          />
          <Typography textAlign="center">{companyName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
