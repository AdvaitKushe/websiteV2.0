import "../styles/home.css";

import { Text, Box } from "@chakra-ui/react";
import "../styles/about.css";

import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";

function WorkInProgress() {
  return (
    <>
      <div className="wrapper">
        <div className="text">
          <NavBar />
          <Particles id="particles" />

          <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
            <Text fontSize="4xl" fontWeight="bold">
              Coming Soon ...
            </Text>
          </Box>
        </div>
      </div>
    </>
  );
}

export default WorkInProgress;
