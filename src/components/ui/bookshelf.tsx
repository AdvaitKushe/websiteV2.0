import { Text, Card } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import BookCard from "./bookCard.tsx";

function Bookshelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <Card.Root
      color="white"
      justifyContent="center"
      alignItems="center"
      maxW="lg"
      gap="6"
      padding="6"
      backgroundColor="rgba(0, 0, 0, 0)"
      
    >
      <Card.Title>Bookshelf</Card.Title>

      {books.map((book: { title: string; author: string; thought: string; time: string }) =>
        book.thought?.length > 0 ? (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
            thought={book.thought}
            time={book.time}
          />
        ) : (
          <Text fontSize="2xl" color="white" key={book.title}>
            {book.title}
          </Text>
        )
      )}
    </Card.Root>
  );
}

export default Bookshelf;
