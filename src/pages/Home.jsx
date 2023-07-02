import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Image,
  Flex,
  Text,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import todo from "../assets/todo.png";

export default function Home() {
  const headingSize = useBreakpointValue({ base: "2rem", md: "3rem" });
  const imageSize = useBreakpointValue({ base: "150px", md: "250px" });
  const { colorMode } = useColorMode();

  return (
    <Flex
      align="center"
      // justify="center"
      direction="column"
      mt="5%"
    >
      <Text
        bgGradient="linear(to-r, teal.500, teal.200)"
        bgClip="text"
        fontSize={headingSize}
        fontWeight="bold"
        textAlign="center"
        mb={2}
      >
        Welcome to Todo App!
      </Text>
      <Image src={todo} alt="Task List" boxSize={imageSize} />
      <Text mt={4} mb={5} mx={8}>
        Start being more organized and productive with our task management tool!
      </Text>
      <Text
        mt={4}
        fontWeight="bold"
        fontSize="1rem"
        color={colorMode === "light" ? "gray.600" : "white"}
      >
        Click below to get started.
      </Text>
      <Link to="/tasks">
        <Button colorScheme="teal" mt={3} w={20}>
          Start
        </Button>
      </Link>
      <Box
        mt="5%"
        textAlign="right"
        fontSize="xs"
        color="gray.500"
        pr={4}
        pb={4}
      >
        <a href="https://www.vecteezy.com/free-png/to-do-list">
          To Do List PNGs by Vecteezy
        </a>
      </Box>
    </Flex>
  );
}
