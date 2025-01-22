import "../styles/home.css";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";
import { Fragment } from "react";
import Resume from "../components/ui/resume.tsx";
import { Avatar } from "@/components/ui/avatar";
import { Tooltip } from "@/components/ui/tooltip";
import {
  Box,
  Text,
  Stack,
  Heading,
  Mark,
  useHighlight,
  HighlightChunk,
  Image,
  Center,
  For,
  HStack,
} from "@chakra-ui/react";
import { ReactTyped } from "react-typed";
import socialsJson from "../files/socials.json";

function Home() {
  function highlight(): HighlightChunk[] {
    const chunks = useHighlight({
      text: "Hi 👋🏽, I'm Advait Kushe",
      query: ["Advait Kushe"],
    });
    return chunks;
  }

  const chunks = highlight();
  const socials = socialsJson;

  return (
    <div className="wrapper" style={{ minHeight: "100vh", overflow: "auto" }}>
      <div className="text" style={{ minHeight: "100vh" }}>
        <Particles id="particles" />
        <NavBar />
        <Box marginTop="200px" width="100%">
          <Stack id="text" padding={6} align="center">
            <Center>
              <Stack align="center" marginTop={"80px"}>
                <Box position="absolute" top="7%" left="50%">
                  <Image boxSize="500px" src="/src/img/bubble.png" />

                  <Text
                    pos="absolute"
                    top="40%"
                    left="50%"
                    color="black"
                    fontSize="lg"
                    transform="translate(-50%,-50%)"
                  >
                    <ReactTyped
                      startWhenVisible
                      strings={[
                        "Welcome to my personal website 🤝 Thanks for dropping by :) Take a look at some of my projects, hobbies, and thoughts I have.",
                      ]}
                      typeSpeed={30}
                    />
                  </Text>
                </Box>
                <Image
                  src="/src/img/Facetune.jpg"
                  boxSize="200px"
                  borderRadius="full"
                  fit="cover"
                  alt="Advait Kushe"
                />
                <HStack>
                  <For each={socials}>
                    {(item) => (
                      <Tooltip openDelay={100} content={item.name} ids={{ trigger: item.id }}>
                        <Avatar
                          ids={{ root: item.id }}
                          _hover={{
                            transform: "scale(1.05)",
                            cursor: "pointer",
                          }}
                          onClick={() => window.open(item.link, "_blank")}
                          size="xs"
                          name="Sage"
                          src={item.src}
                        />
                      </Tooltip>
                    )}
                  </For>
                </HStack>
              </Stack>
            </Center>
            <Heading size="5xl" textAlign="center" maxW="1000ch">
              {chunks.map((chunk, index) => {
                return chunk.match ? (
                  <Mark
                    key={index}
                    css={{
                      fontStyle: "italic",
                      color: "red.500",
                      position: "relative",
                    }}
                  >
                    {chunk.text}
                    <img
                      style={{ position: "absolute", left: 0 }}
                      src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61c4dc7572d22f05ba26fd34_hero-underline.svg"
                      loading="lazy"
                      alt=""
                    />
                  </Mark>
                ) : (
                  <Fragment key={index}>{chunk.text}</Fragment>
                );
              })}
            </Heading>
            <Text textStyle="3xl" textAlign="center">
              I Build Software👨🏽‍💻
            </Text>
            <Resume />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default Home;
