import { Avatar, Card, Flex, Stack, Text } from "@mantine/core";
import { FunctionComponent } from "react";

interface MessageProps {
  children: string;
  response?: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ children }) => {
  return (
    <Flex direction="row" align="flex-start" justify="flex-start">
      <Avatar radius="xl" color="blue"></Avatar>
      <Stack mx="md" spacing={0}>
        <Text color="dimmed" size="xs">
          2023/01/01
        </Text>
        <Card shadow="md" radius="md">
          <Card.Section p="md">{children}</Card.Section>
        </Card>
      </Stack>
    </Flex>
  );
};

export default Message;
