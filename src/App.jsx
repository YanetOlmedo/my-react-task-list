import { Box } from "@chakra-ui/react";
import MainMenu from "./Components/Menu";

function App() {
  return (
    <Box w="100vw" pt="5%" h="100vh" textAlign="center" fontSize="1.2rem" bgGradient="linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);">
      <Box
        p="2%"
        className="container"
        m="auto"
        borderWidth="1px"
        borderRadius="10px"
        width="40vw"
        minW="300px"
        h="80vh"
        bg="rgb(248, 249, 249)"
        overflow="auto"
      >
        <div className="todo-app">
          <MainMenu />
        </div>
      </Box>
    </Box>
  );
}

export default App;

