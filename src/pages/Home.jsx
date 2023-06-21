import { Link } from "react-router-dom";
import { Button, Box, Image, Flex, Text } from "@chakra-ui/react";
import todo from "../assets/todo.png";

export default function Home() {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      mt="5%"
      minHeight="100vh"
    >
      <Text
        bgGradient="linear(to-r, teal.500, teal.200)"
        bgClip="text"
        fontSize="2.8rem"
        fontWeight="bold"
        textAlign="center"
        mb={2}
      >
        Welcome to Todo App!
      </Text>
      <Image src={todo} alt="Task List" boxSize={250} />
        <Text mt={4} mb={6} mx={8}>
          Start being more organized and productive with our task management tool!
        </Text>
        <Text mt={4} fontWeight="bold" fontSize="1rem" color="gray.600">Click below to get started.</Text>
        <Link to="/tasks">
          <Button colorScheme="teal" mt={6} w={20}>Start</Button>
        </Link>
        <Box mt="auto" textAlign="right" fontSize="sm" color="gray.500" pr={4} pb={4}>
          <a href="https://www.vecteezy.com/free-png/to-do-list">To Do List PNGs by Vecteezy</a>
        </Box>
      </Flex>
  );
}





