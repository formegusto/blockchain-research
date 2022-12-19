import { BlockChainContext } from "@/context";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function Generate() {
  const { onGenerate, step } = React.useContext(BlockChainContext);
  const [data, setData] = React.useState<string>("");

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setData(e.target.value);
    },
    []
  );

  return (
    <Card flex={1}>
      <CardHeader>
        <Heading size="lg">생성</Heading>
      </CardHeader>
      <CardBody>
        <Textarea
          resize="none"
          height="250px"
          value={data}
          onChange={onChange}
          disabled={step !== "generate"}
        />
        <Flex justify="flex-end" align="flex-end">
          <Button
            colorScheme="messenger"
            marginTop={4}
            onClick={() => onGenerate(data)}
            disabled={step !== "generate"}>
            생성
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export { Generate };
