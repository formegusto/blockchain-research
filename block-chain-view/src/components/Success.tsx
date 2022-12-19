import { BlockChainContext } from "@/context";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Success() {
  const { verifyHash, difficulty, onRegist } =
    React.useContext(BlockChainContext);

  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="lg">완성</Heading>
      </CardHeader>
      <CardBody>
        <Stack rowGap={2}>
          <Stack>
            <Heading size="md">검증값</Heading>
            <Text fontSize="sm">{verifyHash && verifyHash}</Text>
          </Stack>
        </Stack>
        <Flex justify="flex-end" align="flex-end">
          <Button
            colorScheme="messenger"
            marginTop={4}
            disabled={!verifyHash?.startsWith("0".repeat(difficulty!))}
            onClick={onRegist}>
            등록
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Success };
