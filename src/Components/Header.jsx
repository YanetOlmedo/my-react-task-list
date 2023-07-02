import { Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const headingSize = useBreakpointValue({ base: "2rem", md: "3rem" });

  return (
    <Flex justify="center" align="center" mb="8%" mt="5%">
      <Link to="/">
        <Text
          as="h1"
          fontSize={headingSize}
          fontWeight="extrabold"
          bgGradient="linear(to-r, teal.500, teal.200)"
          bgClip="text"
          mr="0.5rem"
        >
          Todo App
        </Text>
      </Link>
      <Text fontSize="2.8rem" color="teal.500">
        ✓
      </Text>
    </Flex>
  );
}
