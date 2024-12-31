import { HStack, Text, Link, Box, For } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box position="fixed" top="3" left="10">
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
              <Text
                _hover={{ color: "blue.400"  }}
                color="white"
                textStyle={"xl"}
              >
                {item.text}
              </Text>
            </Link>
          )}
        </For>
      </HStack>
    </Box>
  );
}

export default NavBar;
