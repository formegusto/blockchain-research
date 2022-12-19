import { Flex, Stack } from "@chakra-ui/react";
import { BlockChainList, Generate, Success, Verify } from "./components";

function App() {
  return (
    <Stack h="100vh" spacing={8}>
      <Flex flex={1} direction="row" columnGap={12} paddingX={16} paddingY={8}>
        <Generate />
        <Verify />
        <Success />
      </Flex>
      <Flex
        flex={1}
        direction="row"
        paddingX={16}
        paddingY={8}
        align="center"
        overflowX="scroll">
        <BlockChainList />
      </Flex>
    </Stack>
  );
}

export default App;
