import { BlockChainContext } from "@/context";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Verify() {
  const {
    newBlock,
    step,
    difficulty,
    nonce,
    onChangeNonce,
    onChangeDifficulty,
    verifyHash,
  } = React.useContext(BlockChainContext);
  const [autoVerify, setAutoVerify] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (autoVerify) {
      if (verifyHash?.startsWith("0".repeat(difficulty!))) {
        setAutoVerify(false);
      } else {
        (onChangeNonce as any)((prev: number) => prev + 1);
      }
    }
  }, [autoVerify, verifyHash, onChangeNonce, difficulty]);

  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="lg">검증</Heading>
      </CardHeader>
      <CardBody>
        <Card>
          <CardHeader>
            <Heading size="md">블록 정보</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Stack>
                <Heading fontSize="sm">이전 해시</Heading>
                <Text fontSize="sm">{newBlock && newBlock.previousHash}</Text>
              </Stack>
              <Stack>
                <Heading fontSize="sm">해시</Heading>
                <Text fontSize="sm">{newBlock && newBlock.hash}</Text>
              </Stack>
              <Stack>
                <Heading fontSize="sm">데이터</Heading>
                <Text fontSize="sm">{newBlock && newBlock.data}</Text>
              </Stack>
            </Stack>
          </CardBody>
        </Card>
        <Flex mt={6} columnGap={18}>
          <Stack>
            <Heading size="sm">난이도</Heading>
            <NumberInput
              value={difficulty ? difficulty : 0}
              onChange={
                step === "verify"
                  ? (vs, vn) => onChangeDifficulty(vn)
                  : undefined
              }>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Stack>
            <Heading size="sm">nonce</Heading>
            <NumberInput
              value={nonce ? nonce : 0}
              onChange={
                step === "verify" ? (vs, vn) => onChangeNonce(vn) : undefined
              }>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Flex>
        <Flex columnGap={4} justify="flex-end">
          <Button
            colorScheme="messenger"
            marginTop={4}
            disabled={step !== "verify"}
            onClick={() => setAutoVerify((prev) => !prev)}>
            자동 검증
          </Button>
          <Button
            colorScheme="messenger"
            marginTop={4}
            disabled={step !== "verify"}>
            검증
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Verify };
