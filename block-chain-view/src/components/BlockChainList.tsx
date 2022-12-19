import { BlockChainContext } from "@/context";
import { Card } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function BlockChainList() {
  const { blockchain } = React.useContext(BlockChainContext);

  console.log(blockchain);

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
