import { Card, HStack, Flex } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { useId } from "react";

interface Stack {
  src: string;
  name: string;
  id: string;
}

interface WorkCard {
  title: string;
  description: string;
  image: string;
  stack: Stack[];
  linkToWork?: string;
}

function WorkCard({ title, description, image, stack, linkToWork }: WorkCard) {
  const id = useId();

  return (
    <Card.Root
      width="320px"
      key="elevated"
      background={"rgba(255, 255, 255, 0.9)"}
      _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
    >
      <Card.Body color={"grey.200"} gap="2">
        <Flex gap="28" alignItems="center">
          <Tooltip ids={{ trigger: id }} content={title}>
            <Avatar ids={{ root: id }} src={image} name={title} size="lg" shape="rounded" />
          </Tooltip>

          <HStack key={id} gap="25" justifyContent="flex-end" flexGrow={1} position="relative">
            {stack.map((item, index) => {
              const tooltipId = `tooltip-stack-${item.id ?? index}`;
              return (
                <Tooltip  openDelay={100} key={tooltipId} ids={{ trigger: tooltipId }} content={item.name}>
                  <Avatar
                    ids={{ root: tooltipId }}
                    _hover={{
                      transform: "scale(1.1)",
                      zIndex: 10,
                    }}
                    size="xs"
                    name={item.name}
                    src={item.src}
                    position="relative"
                    style={{
                      marginLeft: index > 0 ? "-10px" : "0px",
                      transition: "transform 0.2s ease, zIndex 0.2s ease",
                    }}
                  />
                </Tooltip>
              );
            })}
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
