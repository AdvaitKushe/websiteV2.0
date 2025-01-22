import { Card, Text } from "@chakra-ui/react";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function BookCard({
  title,
  author,
  thought,
  time,
}: {
  title: string;
  author: string;
  thought: string;
  time: string;
}) {
  return (
    <>
      <DialogRoot placement={"center"}>
        <DialogTrigger asChild>
          <Text _hover={{ transform: "scale(1.05)", cursor: "pointer", color: "blue.500" }}>
            {title}
          </Text>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {"Author: " + author + "\n"}
            {time}
          </DialogHeader>
          <DialogBody whiteSpace="pre-wrap">{thought}</DialogBody>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
}

export default BookCard;
