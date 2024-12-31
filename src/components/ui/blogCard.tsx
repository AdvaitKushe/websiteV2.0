import { Card } from "@chakra-ui/react";

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function BlogCard({ title, thought, time }: { title: string; thought: string; time: string }) {
  return (
    <>
      <DialogRoot placement={"center"}>
        <DialogTrigger asChild>
          <Card.Root
            width="320px"
            background={"rgba(255, 255, 255, 0.9)"}
            _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
          >
            <Card.Body color={"grey.200"} gap="2">
              <Card.Title color={"#333333"} mt="2">
                {title}
              </Card.Title>
              <Card.Description color={"#333333"} lineClamp={3}>
                {thought}
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-end" />
          </Card.Root>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {time}
          </DialogHeader>
          <DialogBody>{thought}</DialogBody>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
}

export default BlogCard;
