import "../styles/home.css";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";
import { Fragment } from "react";
import Resume from "../components/ui/resume.tsx";
import { Avatar } from "@/components/ui/avatar";
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

function Home() {
  function highlight(): HighlightChunk[] {
    const chunks = useHighlight({
      text: "Hi 👋🏽, I'm Advait Kushe",
      query: ["Advait Kushe"],
    });
    return chunks;
  }

  const chunks = highlight();

  return (
    <div className="wrapper">
      <div className="text">
        <Particles id="particles" />
        <NavBar />
        <Stack id="text" padding={6} align="center">
          <Center>
            <Stack align="center" marginTop={"80px"}>
              <Box position="absolute" top="-3%" left="50%">
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
                <For
                  each={[
                    {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC",
                      link: "http://www.linkedin.com/in/advaitkushe",
                    },
                    {
                      src: "data:image/png;base64,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",
                      link: "https://github.com/AdvaitKushe",
                    },
                    {
                      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAA3lBMVEX4+Pj////qQzVChfQ0qFP7vATFIh8se/Ps8v7r9e0XokExfvMao0T8wADpOjb7+/vpOirBAADi6/37twDg8eT/+Ofvdm756unpMB373tzpLBf1sa3qRTfvenLGIBofp1b//PbIHQyoQmnMFwA0iv6ZsTjbiYjJNDLekZD78fD92Ij7wSXkqKf94KD925HTaGb8ylP8zWD+8dT+9uLZf3781Hr63NqcMmnDsQCDYKhaedrBJSdZq0rOtyP2urbxUTrxT0j0p6Jpm/ZjuHetxvqr17XU4fwUdPMAnDBVtG2+i8uoAAAEKElEQVR4nO3deVPaXBjGYQgQK1JDGkXcUKrWhVrtRhfBVtva9vt/oSZsyXNykpKH5GTmnPv3Z3lnOuea3G/YplQqCCGEEEIIIYQQQgghhBBCCCGEENIsx6munOOUfQql5SAWsSv7NGrK1cwUuQLQDIArBi2o7JMVWXFqGrsVNNB5mg61YDVN3QpX09OteDUd//+mQk0/NwUTDdJtpmrUdLvcFF1sul1uqtT0utyUXWx6XW7q1LS63MDGSeFGdVop2FipVNNopWBjJT3c5cqax9vHZrHtvDp3Xff84pJvtn018DxvcLVtDtuF2+/Ztt1z3ddctWvPa0zy3pjCduPa89wb1l32+HaGFri91ZRNkLkI1Wy73xtmV3vXiOZd0Ud1eQZC2XaiasFSMw/12mtQt/cGsH3o27SMQ63cCmqNxkcD2O56ApvdP9hdXm24KaL56c926Ypqtm3t7S+rtr+3+Tym5pHnb1qy7cjYrO7hUkN1Ol1LxkaevBnEZrWXGequ1bbAFmWzlhjq/l7w34GNsFndTipaMFCwxdnShzo8aFtgk7GlDXU6ULBJ2ZLuqM5h1wJbMpt8qLvzgZrL9uzTSRqbbKjhQBPYPq/rz7b25UR8eUXY/KFStU7XSmc7a5nAdvr1rp/GRoc6eYqbyjY6aprAVqvVXp6ksUWHSgcqYRsf1eumsJ3SocbY5kON3kHlbGe+mjFsNTrUONt0qOQOKmMbjAI1c9joUCVs/lDv72MDFdjG9WkmsUWGKmWz2pJLjbBNBmoamz9Uu5/GltCCbTRXM4stHCqHbbxAM49tNlQG21lEzTi22R01M9tgFFUzj2061Kxs4zrNRDZ/qBnZyEBNZfOH+k3+VENa+/tIVDOTrbZRlbyGSsh/1dUS1Yxlk7xilxe8xgfbgk3+8jM20Mk7SmAL2aRvdoiX2vRtEbBF2P4/1PmbcGAjbOlDDd/yBRtlW3zwLinyAQPYBLbkoUY/zgJbjC3+iQsdKNjkbLHP98I7KNjS2GJDFT9vBpuUjd5R499uAJucLXpHlXyXBmwJbOFQZd/cAlsiW3UY3FHl3xMEWzJbMNRuR/plN7ClsFWrDw/yPwdbKltSYANbSmBjBTZWYGMFNlZgYwU2VmBjBTZWhM3ZyJ+tRf+Gss+bU/QF+WP+bD/I43qyPcVWuipbc8sAtupP0W1FtuYv+rgubOK/cfT0uEb6nY3tT7MV1mz+3RIeL/u0uRU7eeUFKRvbFmk99njZp82tbCyrVvZpcwtsrMDGCmys8O/usgIbL5VsZZ81x8DGCr+XwEsdW9knzTX8FgwvVWxlnzPn8DtXvNSwlX3K/IMaL6ixwu+T8sKv4TIrUq3ssxUZ1Hjhd+WZFQCnP9qkXOUMMZvl5GDnmEWGEEIIIYQQQgghhBBCCCGEEEIIGdE/4piLANtIiu4AAAAASUVORK5CYII=",
                      link: "https://mail.google.com/mail/?view=cm&fs=1&to=advait.kushe@gmail.com&su=&body=",
                    },
                  ]}
                >
                  {(item, index) => (
                    <Avatar
                      _hover={{
                        transform: "scale(1.05)",
                        cursor: "pointer",
                      }}
                      onClick={() => window.open(item.link, "_blank")}
                      size="xs"
                      name="Sage"
                      src={item.src}
                    />
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
      </div>
    </div>
  );
}

export default Home;