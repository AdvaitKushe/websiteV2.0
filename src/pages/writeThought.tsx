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

  function postBookReview() {
    fetch("http://127.0.0.1:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author, thought }),
    }).then((res) => {
      if (res.ok) {
        console.log("success");
      }
    });
  }

  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");
  const [author, setAuthor] = useState("");

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

      
      <Stack>
        <Text>Book Title</Text>
        <Input
          color={"black"}
          name="Entry"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <Text>Author</Text>
        <Input
          color={"black"}
          name="Entry"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        ></Input>
        <Text>Thought</Text>
        <Textarea
          required = {false}
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
        <Button onClick={postBookReview}>Submit</Button>
      </Stack>

    </div>
  );
}

export default WriteThought;
