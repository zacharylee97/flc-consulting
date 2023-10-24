import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "@/app/components/header";
import Image from "next/image";
import ProjectsDrawer from "@/app/components/projects-drawer";

export default function HertzAvenida() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box sx={{ display: "flex", marginTop: "100px" }}>
        <ProjectsDrawer></ProjectsDrawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h1" className="m-5">
            {"Hertz Car Rental - Avenida Centre"}
          </Typography>
          <Box>
            <Image
              src="/HertzAvenida1.png"
              alt="Hertz Avenida 1"
              width={500}
              height={50}
            />
            <Image
              src="/HertzAvenida2.png"
              alt="Hertz Avenida 2"
              width={500}
              height={50}
            />
          </Box>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
