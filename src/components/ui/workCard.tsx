import { Card, HStack, For, Flex } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Stack {
  src: string;
  name: string;
}

interface WorkCard {
  title: string;
  description: string;
  image: string;
  stack: Stack[];
  linkToWork?: string;
}

function WorkCard({ title, description, image, stack, linkToWork }: WorkCard) {
  return (
    <Card.Root
      width="320px"
      key="elevated"
      background={"rgba(255, 255, 255, 0.9)"}
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
    >
      <Card.Body color={"grey.200"} gap="2">
        <Flex gap="28" alignItems="center">
          <Avatar src={image} name="Nue Camp" size="lg" shape="rounded" />
          <HStack
            gap="25"
            justifyContent="flex-end"
            flexGrow={1}
            position="relative"
            overflow="hidden" /* Prevent overflow */
          >
            <For each={stack}>
              {(item, index) => (
                <Avatar
                  _hover={{
                    transform: "scale(1.1)", // Pops up on hover
                    zIndex: 10, // Brings to front
                  }}
                  size="xs"
                  name={item.name}
                  src={item.src}
                  position="relative" // Required for zIndex to work
                  style={{
                    marginLeft: index > 0 ? "-10px" : "0px", // Overlap effect
                    transition: "transform 0.2s ease, z-index 0.2s ease", // Smooth transition
                  }}
                />
              )}
            </For>
          </HStack>
        </Flex>

        <Card.Title color={"#333333"} mt="2">
          {title}
        </Card.Title>
        <Card.Description color={"#333333"}>{description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        {linkToWork && (
          <Button variant="surface" onClick={() => window.open(linkToWork)}>
            View
          </Button>
        )}
      </Card.Footer>
    </Card.Root>
  );
}

export default WorkCard;
