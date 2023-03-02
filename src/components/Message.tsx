import { Avatar, Card, Flex } from "@mantine/core";
import { FunctionComponent } from "react";

interface MessageProps {
  children: string;
  // rtl?: boolean;
}

const Message: FunctionComponent<MessageProps> = ({ children }) => {
  return (
    <Flex direction="row" align="flex-end" justify="flex-start">
      <Avatar radius="xl"></Avatar>
      <Card shadow="md" mx="md">
        <Card.Section p="md">{children}</Card.Section>
      </Card>
    </Flex>
  );
};

export default Message;
