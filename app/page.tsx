import Header from "./components/header";
import { Typography } from "@mui/material";

export default function Home() {
  const slogan = "If you can dream it, we can build it!";
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Typography variant="h3">{slogan}</Typography>
    </main>
  );
}
