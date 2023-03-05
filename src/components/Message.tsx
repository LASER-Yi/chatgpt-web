import { Card, Flex, Stack, Text } from "@mantine/core";
import { FunctionComponent, useMemo } from "react";

interface MessageProps {
  timestamp: Date;
  children: string;
  response?: boolean;
}

const Message: FunctionComponent<MessageProps> = ({
  children,
  timestamp,
  response,
}) => {
  const justify = useMemo(
    () => (response === true ? "flex-start" : "flex-end"),
    [response]
  );

  return (
    <Flex direction="row" align="flex-start" justify={justify}>
      {/* <Avatar radius="xl" color="blue"></Avatar> */}
      <Stack mx="md" spacing={0}>
        <Text color="dimmed" size="xs">
          {timestamp.toUTCString()}
        </Text>
        <Card radius="md" withBorder>
          <Card.Section p="sm">{children}</Card.Section>
        </Card>
      </Stack>
    </Flex>
  );
};

export default Message;
