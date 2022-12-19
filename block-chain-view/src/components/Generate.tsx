import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";

function Generate() {
  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="lg">생성</Heading>
      </CardHeader>
      <CardBody>
        <Textarea resize="none" height="250px" />
        <Flex justify="flex-end" align="flex-end">
          <Button colorScheme="messenger" marginTop={4}>
            생성
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Generate };
