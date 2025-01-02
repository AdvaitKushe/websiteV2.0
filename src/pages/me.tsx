import "../styles/home.css";
import React from "react";
import { Text, Box, Stack, StackSeparator, Group } from "@chakra-ui/react";
import "../styles/about.css";
import ImageSlider from "@/components/ui/ImageSlider";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";

function Me() {
  return (
    <>
      <div className="wrapper">
        <div className="text">
          <NavBar />
          <Particles id="particles" />

          


        </div>
      </div>
    </>
  );
}

export default Me;
