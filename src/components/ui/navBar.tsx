import { HStack, Text, Link, Box, For, Card } from "@chakra-ui/react";

function NavBar() {
  return (
    <Card.Root
      size="sm"
      position="fixed"
      top="5"
      left="50%"
      transform="translateX(-50%)"
      backgroundColor="rgba(0, 0, 0, .9)"
      padding="4"
      borderRadius="2xl"
      zIndex={1000}
    >
      <HStack top="0" gap="20">
        <For
          each={[
            {
              href: "/",
              text: "Home",
            },
            {
              href: "/me",
              text: "Me",
            },
            {
              href: "/work",
              text: "Work",
            },
            {
              href: "/thoughts",
              text: "Thoughts",
            },
          ]}
        >
          {(item) => (
            <Link href={item.href}>
              <Text _hover={{ color: "blue.400" }} color="white" textStyle={"xl"}>
                {item.text}
              </Text>
            </Link>
          )}
        </For>
      </HStack>
    </Card.Root>
  );
}

export default NavBar;
