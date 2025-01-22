import "../styles/home.css";
import React from "react";
import { Text, Box, Stack, StackSeparator, Group, Card } from "@chakra-ui/react";
import "../styles/about.css";
import ImageSlider from "@/components/ui/ImageSlider";
import Bookshelf from "@/components/ui/bookshelf";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";
import { Grid, GridItem } from "@chakra-ui/react";
import { DecorativeBox } from "@/components/ui/decorative-box";

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
