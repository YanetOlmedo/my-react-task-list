import { Text, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justify="center" align="center" mb="8%" mt="5%">
      <Text
        as="h1"
        fontSize="2.8rem"
        fontWeight="extrabold"
        bgGradient="linear(to-r, teal.500, teal.200)"
        bgClip="text"
        mr="0.5rem"
      >
        Todo App
      </Text>
      <Text fontSize="2.8rem" color="teal.500">
        ✓
      </Text>
    </Flex>
  );
}


