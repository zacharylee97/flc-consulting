import Header from "./components/header";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const slogan = "If you can dream it, we can build it!";
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box sx={{ display: "flex", "margin-top": "100px" }}>
        <Typography variant="h3">{slogan}</Typography>
      </Box>
    </main>
  );
}
