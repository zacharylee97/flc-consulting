import Header from "./components/header";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function Home() {
  const aboutUsText1 = `FLC Consulting's business methods go beyond the basic services offered by the conventional
  general contractor. We understand the diversities of the traditional formal tender/construct
  approach, as well as the professional design/build, and construction management processes. We
  utilize the talents of good subcontractors, quality architects and engineers, interior decorators,
  and landscape architects.`;

  const aboutUsText2 = `FLC Consulting do not have a preconceived better way to build, we strive to service our
  clients' needs better than our competitors, and to provide satisfaction and a quality product.
  FLC Consulting are dependent on our clients for future business. We do what we say we
  will do, and we will do it on time and within budget.`;

  const aboutUsText3 = `FLC Consulting approach all projects, whether large or small, with the same degree of
  attention. Our people are dedicated professionals who have been trained in the way of doing
  things right the first time. We have accomplished one of our most important objectives when we
  satisfy our clients' needs to the extent that the clients have no reservations about using our
  services again. A client's comments carry more truth than any statement that FLC Consulting 
  could make about ourselves.`;

  const aboutUsText4 = `FLC Consulting are an owner operated business, who are large enough to offer a full spectrum
  of personnel and service, yet small enough for top management to give personal attention to all
  of our clients, regardless of the project size.`;

  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Image
          className="w-screen self-center"
          src="/Slogan.png"
          alt="Slogan"
          width={500}
          height={500}
        />
        <Typography className="m-10" variant="h3">
          About Us
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          {aboutUsText1}
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          {aboutUsText2}
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          {aboutUsText3}
        </Typography>
        <Typography className="mx-10 mb-3" variant="h6">
          {aboutUsText4}
        </Typography>
      </Box>
    </main>
  );
}
