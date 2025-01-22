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

function Me() {
  return (
    <>
      <div className="wrapper">
        <div className="text">
          <NavBar />
          <Particles id="particles" />

          <Grid
            h="300px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            maxW="container.xl"
            w="full"
            px={4}
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Bookshelf />
            </GridItem>
            <GridItem colSpan={2}>
              <DecorativeBox>colSpan=2</DecorativeBox>
            </GridItem>
            <GridItem colSpan={2}>
              <DecorativeBox>colSpan=2</DecorativeBox>
            </GridItem>
            <GridItem colSpan={4}>
              <DecorativeBox>colSpan=4</DecorativeBox>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Me;
