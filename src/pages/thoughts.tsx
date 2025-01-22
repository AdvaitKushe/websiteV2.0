import Particles from "../components/ui/particles.tsx";
import NavBar from "../components/ui/navBar.tsx";
import { Flex, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BlogCard from "../components/ui/blogCard.tsx";

function Thoughts() {
  const [thoughtsJson, setThoughtsJson] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/thoughts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setThoughtsJson(data))
      .catch((error) => console.error("Error:", error));
  }, []);

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
          <Flex gap="4" direction="row" wrap="wrap" width="100%" justify="flex-start">
            {thoughtsJson.map((item: { title: string; thought: string; time: string }) => (
              <BlogCard
                key={item.time}
                title={item.title}
                thought={item.thought}
                time={item.time}
              />
            ))}
          </Flex>
        </Box>
      </div>
    </div>
  );
}

export default Thoughts;
