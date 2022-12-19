import { Card } from "@chakra-ui/react";
import styled from "styled-components";

function BlockChainList() {
  return (
    <Wrap>
      <Card w="500px" h="300px" display="inline-block"></Card>
      <Card w="500px" h="300px" display="inline-block"></Card>
      <Card w="500px" h="300px" display="inline-block"></Card>
      <Card w="500px" h="300px" display="inline-block"></Card>
      <Card w="500px" h="300px" display="inline-block"></Card>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* width: 100%; */
  max-height: 100%;
  display: flex;

  column-gap: 24px;
`;

export { BlockChainList };
