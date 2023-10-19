import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image";

const companyName = "FLC Consulting";
const pages = ["About", "Services", "Contact Us"];

export default function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Image
            className="m-5"
            src="/flcLogo.jpg"
            alt="FLC Logo"
            width={50}
            height={50}
          />
          <Typography variant="h5" className="m-5" textAlign="center">
            {companyName}
          </Typography>
          <Box
            className="m-5"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ m: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
