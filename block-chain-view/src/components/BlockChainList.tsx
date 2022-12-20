import { BlockChainContext } from "@/context";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

function BlockChainList() {
  const { blockchain } = React.useContext(BlockChainContext);

  return (
    <Wrap>
      {blockchain.map((block) => (
        <Card w="500px" display="inline-block" key={block.hash}>
          <CardHeader>
            <Heading>Block # {block.height}</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Stack border="1px solid #333" borderRadius={8} p={2}>
                <Heading size="xs">이전 해시</Heading>
                <Text>{block.previousHash}</Text>
              </Stack>
              <Stack border="1px solid #333" borderRadius={8} p={2}>
                <Heading size="xs">해시</Heading>
                <Text>{block.hash}</Text>
              </Stack>
              <Stack border="1px solid #333" borderRadius={8} p={2}>
                <Heading size="xs">data</Heading>
                <Text>{block.data}</Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      ))}
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
