import "../styles/home.css";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";
import { Fragment } from "react";
import { Box, Text } from "@chakra-ui/react";
import WorkCard from "../components/ui/workCard.tsx";
function Work() {
  return (
    <div className="wrapper">
      <div className="text">
        <Particles id="particles" />
        <NavBar />
    <WorkCard title = "Title" description="Description" image="/src/img/bubble.png" stack={[""]}/>
        <Box>
          <Text>Work</Text>
        </Box>
      </div>
    </div>
  );
}

export default Work;
