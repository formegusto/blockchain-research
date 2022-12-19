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

function Verify() {
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
            <Text fontSize="sm">이전 해시 : </Text>
            <Text fontSize="sm">해시 : </Text>
            <Text fontSize="sm">데이터 : </Text>
          </CardBody>
        </Card>
        <Flex mt={6} columnGap={18}>
          <Stack>
            <Heading size="sm">난이도</Heading>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Stack>
            <Heading size="sm">nonce</Heading>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Flex>
        <Flex columnGap={4} justify="flex-end">
          <Button colorScheme="messenger" marginTop={4}>
            자동 검증
          </Button>
          <Button colorScheme="messenger" marginTop={4}>
            검증
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Verify };
