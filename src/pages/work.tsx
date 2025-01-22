import "../styles/home.css";
import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";

import { Text, For, Stack, Box } from "@chakra-ui/react";
import WorkCard from "../components/ui/workCard.tsx";
import workJson from "../files/work.json";
import projectsJson from "../files/projects.json";

interface Stack {
  src: string;
  name: string;
  id: string;
}
interface Work {
  title: string;
  description: string;
  date?: string;
  image: string;
  stack: Stack[];
  link?: string;
  linkToWork?: string;
}
function Work() {
  const workData: Work[] = workJson;

  const projects: Work[] = projectsJson;

  return (
    <div className="wrapper">
      <div className="text">
        
        <Particles id="particles" />
        <NavBar />
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          marginTop="100px"
          width="100%"
          maxWidth="1200px"
          padding="0 20px"
        >
          <Text fontSize="4xl" color="white" marginBottom="6">Work</Text>
          <Stack 
            gap="4" 
            direction="row" 
            wrap="wrap"
            justify="center"
          >
            <For each={workData}>
              {(work) => (
                <WorkCard
                  title={work.title}
                  description={work.description}
                  image={work.image}
                  stack={work.stack}
                />
              )}
            </For>
          </Stack>

          <Box marginTop={8} width="100%" display="flex" flexDirection="column" alignItems="center">
            <Text fontSize="4xl" color="white" marginBottom="6">Personal Projects</Text>
            <Stack 
              gap="4" 
              direction="row" 
              wrap="wrap"
              justify="center"
            >
              <For each={projects}>
                {(work) => (
                  <WorkCard
                    title={work.title}
                    description={work.description}
                    image={work.image}
                    stack={work.stack}
                    linkToWork={work.link}
                  />
                )}
              </For>
            </Stack>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Work;
