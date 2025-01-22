import { Box } from "@chakra-ui/react";

export function DecorativeBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      p={4}
      bg="rgba(255, 255, 255, 0.1)"
      borderRadius="lg"
      backdropFilter="blur(10px)"
      color="white"
    >
      {children}
    </Box>
  );
} 