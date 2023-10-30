import Header from "@/app/components/header";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aliquam ipsum risus, dapibus iaculis massa vitae, consectetur mattis dolor. 
Aenean feugiat augue varius ipsum accumsan tempor. Morbi in felis nibh. 
Vestibulum et diam accumsan, volutpat quam vitae, mollis tellus. Sed porta 
fringilla vehicula. Nunc odio justo, bibendum nec arcu facilisis, ultricies 
congue nulla. Suspendisse potenti.`;

export default function Commercial() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="mx-10 mt-28">
        <Typography variant="h1">Project Management</Typography>
        <Typography variant="h3">Commercial</Typography>
      </Box>
      <Box className="m-10">
        <Typography variant="h6">{text}</Typography>
        <Typography className="mt-5" variant="h5">
          Paul Teoh Chartered Accountant
        </Typography>
        <Image
          className="m-5"
          src="/PaulTeoh1.png"
          alt="PaulTeoh1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/PaulTeoh2.png"
          alt="PaulTeoh2"
          width={500}
          height={50}
        />
        <Typography className="mt-5" variant="h5">
          Hertz Car Rental - Avenida Centre
        </Typography>
        <Image
          className="m-5"
          src="/HertzAvenida1.png"
          alt="HertzAvenida1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/HertzAvenida2.png"
          alt="HertzAvenida2"
          width={500}
          height={50}
        />
        <Typography className="mt-5" variant="h5">
          Korea Plaza
        </Typography>
        <Image
          className="m-5"
          src="/KoreaPlaza1.png"
          alt="KoreaPlaza1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/KoreaPlaza2.png"
          alt="KoreaPlaza2"
          width={500}
          height={50}
        />
        <Typography className="mt-5" variant="h5">
          Thai Nongkai Restaurant
        </Typography>
        <Image
          className="m-5"
          src="/ThaiNongkai1.png"
          alt="ThaiNongkai1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/ThaiNongkai2.png"
          alt="ThaiNongkai2"
          width={500}
          height={50}
        />
        <Typography className="mt-5" variant="h5">
          Optima
        </Typography>
        <Image
          className="m-5"
          src="/Optima1.jpg"
          alt="Optima1"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/Optima2.jpg"
          alt="Optima2"
          width={500}
          height={50}
        />
        <Image
          className="m-5"
          src="/Optima3.jpg"
          alt="Optima3"
          width={500}
          height={50}
        />
      </Box>
    </main>
  );
}
