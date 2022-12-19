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

function Success() {
  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="lg">완성</Heading>
      </CardHeader>
      <CardBody>
        <Stack rowGap={2}>
          <Stack>
            <Heading size="md">정답값</Heading>
            <Text fontSize="sm">ㅁㄴㅇㄹㄴㅇㅁㄹㄴㅁㄹㄴㅁ</Text>
          </Stack>
          <Stack>
            <Heading size="md">검증값</Heading>
            <Text fontSize="sm">ㅁㄴㅇㄹㄴㅇㅁㄹㄴㅁㄹㄴㅁ</Text>
          </Stack>
        </Stack>
        <Flex justify="flex-end" align="flex-end">
          <Button colorScheme="messenger" marginTop={4}>
            등록
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Success };
