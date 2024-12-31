import "../styles/home.css";
import { useState} from "react";

import NavBar from "../components/ui/navBar.tsx";

import { Button, Input, Stack, Textarea, Text } from "@chakra-ui/react";

function WriteThought() {
  const postThought = () => {
    console.log(title, thought);
    fetch("http://127.0.0.1:5000/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, thought }),
    }).then((res) => {
      if (res.ok) {
        console.log("success");
      }
    });
  };

  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  return (
    <div className="wrapper">
      <NavBar />
      <Stack>
        <Text>Title</Text>
        <Input
          color={"black"}
          name="Entry"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Text>Thought</Text>
        <Textarea
          onChange={(e) => setThought(e.target.value)}
          id="Entry"
          placeholder="Thought"
          fontSize="lg"
          padding="4"
          width={"50%"}
          minW="500px"
          minH="120px"
          color={"black"}
        />
        <Button onClick={postThought}>Submit</Button>
      </Stack>
    </div>
  );
}

export default WriteThought;
