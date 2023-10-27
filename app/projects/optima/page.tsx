import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "@/app/components/header";
import Image from "next/image";
import ProjectsDrawer from "@/app/components/projects-drawer";

export default function Optima() {
  return (
    <main className="min-h-screen">
      <Header></Header>
      <Box className="flex mt-96">
        <ProjectsDrawer></ProjectsDrawer>
        <Box component="main">
          <Typography variant="h1" className="m-5">
            {"Optima"}
          </Typography>
          <Box>
            <Image src="/optima1.jpg" alt="Optima 1" width={500} height={50} />
            <Image src="/optima2.jpg" alt="Optima 2" width={500} height={50} />
            <Image src="/optima3.jpg" alt="Optima 3" width={500} height={50} />
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
