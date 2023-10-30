import Header from "@/app/components/header";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aliquam ipsum risus, dapibus iaculis massa vitae, consectetur mattis dolor. 
Aenean feugiat augue varius ipsum accumsan tempor. Morbi in felis nibh. 
Vestibulum et diam accumsan, volutpat quam vitae, mollis tellus. Sed porta 
fringilla vehicula. Nunc odio justo, bibendum nec arcu facilisis, ultricies 
congue nulla. Suspendisse potenti.`;

export default function Industrial() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="mx-10 mt-28">
        <Typography variant="h1">Project Management</Typography>
        <Typography variant="h3">Industrial</Typography>
      </Box>
      <Box className="m-10">
        <Typography variant="h6">{text}</Typography>
        <Typography className="mt-5" variant="h5">
          Dah Shin International Food Processing
        </Typography>
        <Image
          className="m-5"
          src="/DahShin1.png"
          alt="DahShin1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/DahShin2.png"
          alt="DahShin2"
          width={500}
          height={50}
        />
        <Typography className="mt-5" variant="h5">
          Loring Tarcore Laboratory
        </Typography>
        <Image
          className="m-5"
          src="/LoringTarcore1.png"
          alt="LoringTarcore1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/LoringTarcore2.png"
          alt="LoringTarcore2"
          width={500}
          height={50}
        />
      </Box>
    </main>
  );
}
