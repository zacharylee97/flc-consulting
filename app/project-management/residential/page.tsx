import Header from "@/app/components/header";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aliquam ipsum risus, dapibus iaculis massa vitae, consectetur mattis dolor. 
Aenean feugiat augue varius ipsum accumsan tempor. Morbi in felis nibh. 
Vestibulum et diam accumsan, volutpat quam vitae, mollis tellus. Sed porta 
fringilla vehicula. Nunc odio justo, bibendum nec arcu facilisis, ultricies 
congue nulla. Suspendisse potenti.`;

export default function Residential() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="mx-10 mt-28">
        <Typography variant="h1">Project Management</Typography>
        <Typography variant="h3">Residential</Typography>
      </Box>
      <Box className="m-10">
        <Typography variant="h6">{text}</Typography>
        <Typography className="mt-5" variant="h5">
          Rocky Ridge
        </Typography>
        <Image
          className="m-5"
          src="/RockyRidge1.png"
          alt="Rocky Ridge 1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/RockyRidge2.png"
          alt="Rocky Ridge 2"
          width={500}
          height={50}
        />
      </Box>
    </main>
  );
}
