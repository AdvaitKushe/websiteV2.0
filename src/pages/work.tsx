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
        <Box >
          <Text>Work</Text>
          <Stack gap="4" direction="row" wrap="wrap">
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
        </Box>
        <Box marginTop={8}>
          <Text>Personal Projects</Text>
          <Stack gap="4" direction="row" wrap="wrap">
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
      </div>
    </div>
  );
}

export default Work;
