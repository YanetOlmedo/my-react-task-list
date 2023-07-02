import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import MainMenu from "./Components/Menu";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100vw"
      pt="5%"
      h="100vh"
      textAlign="center"
      fontSize="1.2rem"
      bg={
        colorMode === "light"
          ? "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);"
          : "linear-gradient(-225deg, #2C7A7B 0%, #EACCF8 48%, #44337A 100%);"
      }
      position="relative"
    >
      <Box
        p="2%"
        className="container"
        m="auto"
        mb="14%"
        borderWidth="1px"
        borderRadius="10px"
        width={["90%", "80%", "45vw"]}
        minW="300px"
        h={["90%", "80%", "80vh"]}
        bg={colorMode === "light" ? "white" : "gray.600"}
        overflow="auto"
      >
        <MainMenu />
      </Box>
      <Box position="absolute" bottom="2%" right="2%">
        <Button
          colorScheme="teal"
          onClick={toggleColorMode}
          justifyContent="center"
          borderRadius={50}
          w="50%"
          size={["sm", "md", "lg"]}
          boxShadow="dark-lg"
        >
          {colorMode === "dark" ? (
            <SunIcon margin="0" />
          ) : (
            <MoonIcon margin="0" />
          )}
        </Button>
      </Box>
    </Flex>
  );
}

export default App;
