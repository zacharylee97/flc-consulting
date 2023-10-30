import { Box, Typography } from "@mui/material";
import Header from "../components/header";

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Typography className="m-10 mb-3" variant="h3">
          Contact Us
        </Typography>
        <Box className="mx-16">
          <Typography variant="h6">Francis Lee</Typography>
          <Typography variant="h6">flee3499@telusplanet.net</Typography>
          <Typography variant="h6">403-680-4086</Typography>
        </Box>
      </Box>
    </main>
  );
}
